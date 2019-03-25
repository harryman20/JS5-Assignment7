import { Component } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  private contents: Content[];
  constructor(private contentService: ContentService) { }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.contentService.addContent({ title } as Content)
        .subscribe(content => {
          this.contents.push(content);
        });
  }

}
