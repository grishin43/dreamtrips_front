import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

    slides: any = {};
    slideConfig = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    modal_button_class = 'def-btn def-btn-white';
    modal_button_text = 'Погнали !';

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.slides = this.getSlides();
    }

    getSlides() {
        return this.content.getContent().slides;
    }

}
