import {Component, OnInit, Input} from '@angular/core';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpService} from '../../services/http/http.service';
import {default as Swal} from 'sweetalert2';
import {EventEmitterService} from '../../services/event-emitter/event-emitter.service';

@Component({
    selector: 'app-callback',
    templateUrl: './callback.component.html',
    styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
    @Input() button_text: string;
    @Input() button_class: string;

    callbackForm: FormGroup;
    firstName: string;
    email: string;
    phoneNumber: string;
    show_preloader = false;
    is_sending = false;


    constructor(config: NgbModalConfig, private modalService: NgbModal, private  httpClient: HttpService,
                private eventEmitterService: EventEmitterService) {
        config.backdrop = 'static';
        config.keyboard = false;
        this.callbackForm = new FormGroup({
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
        });
    }

    ngOnInit() {
    }

    sendData(formData: NgForm) {
        this.show_preloader = true;
        this.is_sending = true;
        this.httpClient.sendCallback(formData,
            (data) => {
                this.show_preloader = false;
                this.is_sending = false;
                this.callbackForm.reset();
                this.closeModal();
                if (data.hasOwnProperty('data')) {
                    const dataObj = data['data'];
                    if (dataObj.hasOwnProperty('uuid')) {
                        localStorage.setItem('uuid', dataObj['uuid']);
                        this.updateTelegramBotLink();

                    }
                }
                Swal.fire({
                    title: 'Успешно отправлено!',
                    text: 'Мы свяжемся с вами в ближайшее время',
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'Отлично!'
                }).then(() => {
                    this.redirectToTelegramBot();
                });
            },
            (error) => {
                this.show_preloader = false;
                this.is_sending = false;
                this.closeModal();
                Swal.fire({
                    title: 'При отправке произошла ошибка!',
                    text: 'Попробуйте повторить позже.',
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Ну хорошо...'
                }).then(() => {
                    console.log('Error', error);
                });
            });
    }

    openModal(modal) {
        this.modalService.open(modal);
    }

    closeModal() {
        this.modalService.dismissAll();
        // crutch for bootstrap modal close
        document.body.style.paddingRight = '0';
    }

    get userName() {
        return this.callbackForm.get('firstName');
    }

    get userEmail() {
        return this.callbackForm.get('email');
    }

    get userPhone() {
        return this.callbackForm.get('phoneNumber');
    }

    updateTelegramBotLink() {
        this.eventEmitterService.headerSetTelegramBotLink();
    }

    redirectToTelegramBot() {
        this.eventEmitterService.redirectToTelegramBot();
    }

}
