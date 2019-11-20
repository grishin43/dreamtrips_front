import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

    stories: any = {};

    constructor(private content: ContentService) {
    }

    ngOnInit() {
        this.stories = this.getStories();
    }

    getStories() {
        return this.content.getContent().stories;
    }

}
