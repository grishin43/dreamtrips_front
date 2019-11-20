import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';
import {EventEmitterService} from '../../services/event-emitter/event-emitter.service';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

    banners: any = {};
    telegram_bot_link: string;
    social: any = {};

    constructor(private content: ContentService, private eventEmitterService: EventEmitterService) {
    }

    ngOnInit() {
        this.social = this.getSocial();
        this.banners = this.getBanners();
        if (this.eventEmitterService.subsVar_1 === undefined) {
            this.eventEmitterService.subsVar_1 = this.eventEmitterService.invokeLinkSetFunction.subscribe(() => {
                this.setTelegramBotLink();
            });
        }
        this.setTelegramBotLink();
    }

    getSocial() {
        return this.content.getContent().social;
    }

    getBanners() {
        return this.content.getContent().banners;
    }

    setTelegramBotLink() {
        if (localStorage.getItem('uuid')) {
            this.telegram_bot_link = this.social.telegram_bot + '?start=' + localStorage.getItem('uuid');
        } else {
            this.telegram_bot_link = this.social.telegram_bot;
        }
    }

}
