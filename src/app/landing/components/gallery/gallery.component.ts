import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    gallery: any = {};
    slideConfig = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.gallery = this.getGallery();
    }

    getGallery() {
        return this.content.getContent().gallery;
    }
}
