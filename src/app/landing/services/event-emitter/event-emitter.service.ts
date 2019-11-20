import {Injectable, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterService {

    invokeLinkSetFunction = new EventEmitter();
    invokeRedirectFunction = new EventEmitter();
    subsVar_1: Subscription;
    subsVar_2: Subscription;

    constructor() {
    }

    headerSetTelegramBotLink() {
        this.invokeLinkSetFunction.emit();
    }

    redirectToTelegramBot() {
        this.invokeRedirectFunction.emit();
    }
}
