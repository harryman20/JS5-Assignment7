import { Component,  OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content1: Content[];
  typeCheck: string;
  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
      this.contentService.getContentObs().subscribe(contentArray => this.content1 = contentArray);  }

    clickEvent() {
        const numOfResults = this.content1.filter(c => c.type === this.typeCheck).length;
        alert ('The number of items with that title is: ' + numOfResults);
    }
}
