import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {default as Swal} from 'sweetalert2';
import {HttpService} from '../../services/http/http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    email: string;
    password: string;
    show_preloader = false;
    is_sending = false;

    constructor(private  httpClient: HttpService, private router: Router) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(this.email, [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl(this.password, [
                Validators.required
            ])
        });
    }

    login(formData: NgForm) {
        this.show_preloader = true;
        this.is_sending = true;
        this.httpClient.sendLogin(formData,
            (data) => {
                data = data.data;
                localStorage.setItem('currentUser', data.uuid);
                this.router.navigate(['/admin']);
            },
            (error) => {
                this.show_preloader = false;
                this.is_sending = false;
                Swal.fire({
                    title: 'При авторизации произошла ошибка!',
                    text: 'Попробуйте повторить позже.',
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Окей...'
                }).then(() => {
                    console.log('Error', error);
                });
            });
    }

    get userEmail() {
        return this.loginForm.get('email');
    }

    get userPassword() {
        return this.loginForm.get('password');
    }
}
