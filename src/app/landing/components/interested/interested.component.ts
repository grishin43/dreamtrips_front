import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {

    interested: any = {};
    modal_button_class = 'def-btn def-btn-white';
    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.interested = this.getInterested();
    }

    getInterested() {
        return this.content.getContent().interested;
    }

}
