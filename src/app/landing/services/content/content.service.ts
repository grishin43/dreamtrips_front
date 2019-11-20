import {Injectable} from '@angular/core';
import {content} from '../../content';

@Injectable({
    providedIn: 'root'
})
export class ContentService {

    data = content;

    constructor() {
    }

    getContent() {
        return this.data;
    }
}
