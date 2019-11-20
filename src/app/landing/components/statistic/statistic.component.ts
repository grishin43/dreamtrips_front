import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
    statistic: any = {};

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.statistic = this.getStatistic();
    }

    getStatistic() {
        return this.content.getContent().statistic;
    }
}
