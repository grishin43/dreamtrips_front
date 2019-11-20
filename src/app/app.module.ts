import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './landing/components/header/header.component';
import {ContentService} from './landing/services/content/content.service';
import {IntroComponent} from './landing/components/intro/intro.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {BannersComponent} from './landing/components/banners/banners.component';
import {AboutComponent} from './landing/components/about/about.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {OffersComponent} from './landing/components/offers/offers.component';
import {JoinComponent} from './landing/components/join/join.component';
import {StoriesComponent} from './landing/components/stories/stories.component';
import {StatisticComponent} from './landing/components/statistic/statistic.component';
import {FeedbackComponent} from './landing/components/feedback/feedback.component';
import {LoginComponent} from './landing/components/login/login.component';
import {NotfoundComponent} from './landing/components/notfound/notfound.component';
import {FooterComponent} from './landing/components/footer/footer.component';
import {HomeComponent} from './landing/components/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {CallbackComponent} from './landing/components/callback/callback.component';
import {GalleryComponent} from './landing/components/gallery/gallery.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {InterestedComponent} from './landing/components/interested/interested.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PolicyComponent} from './landing/components/policy/policy.component';
import {DpaComponent} from './landing/components/dpa/dpa.component';
import {OnlyNumsPipe} from './landing/pipes/only-nums.pipe';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IntroComponent,
        BannersComponent,
        AboutComponent,
        OffersComponent,
        JoinComponent,
        StoriesComponent,
        StatisticComponent,
        FeedbackComponent,
        LoginComponent,
        NotfoundComponent,
        FooterComponent,
        HomeComponent,
        CallbackComponent,
        GalleryComponent,
        InterestedComponent,
        PolicyComponent,
        DpaComponent,
        OnlyNumsPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxMaskModule.forRoot(options),
        SlickCarouselModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule,
        ScrollToModule.forRoot(),
        NgbModule,
        BrowserAnimationsModule
    ],
    providers: [ContentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
