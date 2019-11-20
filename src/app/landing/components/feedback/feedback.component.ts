import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import swal, {default as Swal} from 'sweetalert2';
import {HttpService} from '../../services/http/http.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    feedbackForm: FormGroup;
    firstName: string;
    email: string;
    phoneNumber: string;
    question: string;
    text_max_length = 500;
    show_preloader = false;
    is_sending = false;

    constructor(private  httpClient: HttpService) {
        this.feedbackForm = new FormGroup({
            'firstName': new FormControl(this.firstName, [
                Validators.required
            ]),
            'email': new FormControl(this.email, [
                Validators.required,
                Validators.email
            ]),
            'phoneNumber': new FormControl(this.phoneNumber, [
                Validators.required
            ]),
            'question': new FormControl(this.question, [
                Validators.required,
                Validators.maxLength(this.text_max_length)
            ])
        });
    }

    ngOnInit() {

    }

    sendData(formData: NgForm) {
        this.show_preloader = true;
        this.is_sending = true;
        this.httpClient.sendFeedback(formData,
            () => {
                this.show_preloader = false;
                Swal.fire({
                    title: 'Ваш вопрос успешно отправлен!',
                    text: 'Мы ответим на него в ближайшее время',
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'Отлично!'
                }).then(() => {
                    this.feedbackForm.reset();
                    this.is_sending = false;
                });
            },
            (error) => {
                this.show_preloader = false;
                Swal.fire({
                    title: 'При отправке произошла ошибка!',
                    text: 'Попробуйте повторить позже.',
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Ну хорошо...'
                }).then(() => {
                    console.log('Error', error);
                    this.is_sending = false;
                });
            });
    }

    get userName() {
        return this.feedbackForm.get('firstName');
    }

    get userEmail() {
        return this.feedbackForm.get('email');
    }

    get userPhone() {
        return this.feedbackForm.get('phoneNumber');
    }

    get userText() {
        return this.feedbackForm.get('question');
    }

}
