import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    about: any = {};
    tab_index: number;
    modal_button_class = 'def-btn def-btn-fill-blue';
    modal_button_text = 'Я с вами';

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.tab_index = 0;
        this.about = this.getAbout();
    }

    getAbout() {
        return this.content.getContent().about;
    }

    setTabIndex(index) {
        this.tab_index = index;
    }

}
