import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-dpa',
    templateUrl: './dpa.component.html',
    styleUrls: ['./dpa.component.css']
})
export class DpaComponent implements OnInit {
    contacts: any = {};

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.contacts = this.getContacts();
    }

    getContacts() {
        return this.content.getContent().contacts;
    }

}
