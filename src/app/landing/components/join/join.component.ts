import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-join',
    templateUrl: './join.component.html',
    styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

    join: any = {};
    modal_button_class = 'def-btn def-btn-white';
    modal_button_text = 'Попасть в проект';

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.join = this.getJoin();
    }

    getJoin() {
        return this.content.getContent().join;
    }

}
