import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ContentService} from '../../services/content/content.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    animations: [
        trigger(
            'enterUp', [
                transition(':enter', [
                    style({transform: 'translateY(200%)', opacity: 0}),
                    animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateY(0)', opacity: 1}),
                    animate('300ms', style({transform: 'translateY(200%)', opacity: 0}))
                ])
            ]
        )
    ],
})
export class FooterComponent implements OnInit {
    @ViewChild('pageUp') upButton: ElementRef;
    @ViewChild('footer') footerEl: ElementRef;

    contacts: any = {};
    global: any = {};
    showUpButton = false;
    posUpButton = 15;

    constructor(private content: ContentService) {
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
        this.showUpButton = window.pageYOffset >= window.innerHeight;
        window.scrollY >= this.footerEl.nativeElement.offsetTop - window.innerHeight
            ? this.posUpButton = window.scrollY - (this.footerEl.nativeElement.offsetTop - window.innerHeight) + 15
            : this.posUpButton = 15;
    }

    ngOnInit() {
        this.contacts = this.getContacts();
        this.global = this.getGlobal();
    }

    getContacts() {
        return this.content.getContent().contacts;
    }

    getGlobal() {
        return this.content.getContent().global;
    }
}
