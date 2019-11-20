import {Component, OnInit, HostListener, Inject, ElementRef, ViewChild, AfterContentChecked} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ContentService} from '../../services/content/content.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {EventEmitterService} from '../../services/event-emitter/event-emitter.service';
import {Router, Event, NavigationEnd} from '@angular/router';
import {OnlyNumsPipe} from '../../pipes/only-nums.pipe';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations: [
        trigger(
            'enterLeft', [
                transition(':enter', [
                    style({transform: 'translateX(-100%)'}),
                    animate('300ms', style({transform: 'translateX(0)'}))
                ]),
                transition(':leave', [
                    style({transform: 'translateX(0)'}),
                    animate('300ms', style({transform: 'translateX(-100%)'}))
                ])
            ]
        ),
        trigger(
            'enterUp', [
                transition(':enter', [
                    style({transform: 'translateY(30px)', opacity: 0}),
                    animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateY(0)', opacity: 1}),
                    animate('300ms', style({transform: 'translateY(30px)', opacity: 0}))
                ])
            ]
        )
    ],
})
export class HeaderComponent implements OnInit, AfterContentChecked {
    @ViewChild('navMenu') navMenu: ElementRef;
    @ViewChild('home') header: ElementRef;
    contacts: any = {};
    social: any = {};
    nav: any = {};
    current_route: string;
    navMenuOffTop: number;
    telegram_bot_link: string;
    show_menu = true;
    show_contacts = true;
    sticky_header = false;
    headerHeight = 0;

    constructor(@Inject(DOCUMENT) document,
                private content: ContentService,
                private eventEmitterService: EventEmitterService,
                private router: Router) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.current_route = event.url;
            }
        });
    }

    ngOnInit() {
        if (this.eventEmitterService.subsVar_1 === undefined) {
            this.eventEmitterService.subsVar_1 = this.eventEmitterService.invokeLinkSetFunction.subscribe(() => {
                this.setTelegramBotLink();
            });
        }
        if (this.eventEmitterService.subsVar_2 === undefined) {
            this.eventEmitterService.subsVar_2 = this.eventEmitterService.invokeRedirectFunction.subscribe(() => {
                this.redirectToTelegramBot();
            });
        }
        this.contacts = this.getContacts();
        this.social = this.getSocial();
        this.nav = this.getNav();
        this.setTelegramBotLink();
        this.toggleHeaderMenu();
    }

    ngAfterContentChecked() {
        this.setScrollParams();
    }

    @HostListener('window:storage', ['$event'])
    onWindowStorage(e) {
        this.setTelegramBotLink();
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
        if (window.innerWidth > 767) {
            this.sticky_header = window.pageYOffset > this.navMenu.nativeElement.offsetTop
                && window.pageYOffset > this.navMenu.nativeElement.clientHeight;
        }
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize(e) {
        this.setScrollParams();
        this.toggleHeaderMenu();
    }

    toggleHeaderMenu() {
        if (window.innerWidth < 768) {
            this.show_menu = false;
            this.show_contacts = false;
        } else {
            this.show_menu = true;
            this.show_contacts = true;
        }
    }

    setTelegramBotLink() {
        if (localStorage.getItem('uuid')) {
            this.telegram_bot_link = this.social.telegram_bot + '?start=' + localStorage.getItem('uuid');
        } else {
            this.telegram_bot_link = this.social.telegram_bot;
        }
    }

    redirectToTelegramBot() {
        window.open(this.telegram_bot_link, '_blank');
    }

    getNav() {
        return this.content.getContent().navigation;
    }

    getContacts() {
        return this.content.getContent().contacts;
    }

    getSocial() {
        return this.content.getContent().social;
    }

    toggleMenu() {
        this.show_menu = !this.show_menu;
        if (this.show_menu) {
            this.show_contacts = !this.show_menu;
        }
    }

    setScrollParams() {
        if (window.innerWidth > 767) {
            if (this.navMenu) {
                this.headerHeight = this.navMenu.nativeElement.clientHeight;
            }
        } else {
            if (this.header) {
                this.headerHeight = this.header.nativeElement.clientHeight;
            }
        }
        if (this.navMenu) {
            this.navMenuOffTop = this.navMenu.nativeElement.offsetTop;
        }
    }
}
