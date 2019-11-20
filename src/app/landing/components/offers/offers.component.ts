import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

    offers: any = {};

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.offers = this.getOffers();
    }

    getOffers() {
        return this.content.getContent().offers;
    }

}
