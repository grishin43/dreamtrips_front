import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    server = 'https://dreamtrips-funnel.herokuapp.com';


    constructor(private http: HttpClient) {
    }

    sendFeedback(feedbackData, successCallback, errorCallback) {
        if (feedbackData) {
            this.http.post(`${this.server}/api/user/feedback`,
                feedbackData)
                .subscribe(
                    data => {
                        successCallback(data);
                    },
                    error => {
                        errorCallback(error);
                    }
                );
        }
    }

    sendCallback(feedbackData, successCallback, errorCallback) {
        if (feedbackData) {
            this.http.post(`${this.server}/api/user/signup`,
                feedbackData)
                .subscribe(
                    data => {
                        successCallback(data);
                    },
                    error => {
                        errorCallback(error);
                    }
                );
        }
    }

    sendLogin(userData, successCallback, errorCallback) {
        if (userData) {
            this.http.post(`${this.server}/api/admin/signin`,
                userData)
                .subscribe(
                    data => {
                        successCallback(data);
                    },
                    error => {
                        errorCallback(error);
                    }
                );
        }
    }
}
