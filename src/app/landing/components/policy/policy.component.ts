import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-policy',
    templateUrl: './policy.component.html',
    styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
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
