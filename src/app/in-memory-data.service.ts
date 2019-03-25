import { Injectable } from '@angular/core';
import { Content} from'./content-card/content-card-helper';
import { InMemoryDbService } from'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const CONTENT: Content[] = [{
            title: 'Allo',
            contentId: 1337,
            author: 'Me',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'something something',
            type: 'news',
            tags: ['something', 'somewhere', 'nothing']
        }, {
            title: 'Hallo',
            contentId: 13371,
            author: 'You',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'something thing',
            type: 'story',
            tags: ['something', 'hdsjkadhsjkass', 'below']
        }, {
            title: 'Hello',
            contentId: 13372,
            author: 'He',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'something some',
            type: 'news'
        }, {
            title: 'Ballo',
            contentId: 13373,
            author: 'She',
            body: 'thing something',
            type: 'news'
        }, {
            title: 'Yallo',
            contentId: 13374,
            author: 'Be',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            body: 'some something',
            type: 'story',
            tags: ['something', 'shdjksahajkd']
        }];
      return {CONTENT};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(content => content.contentId)) + 1 : 2000;
  }
}
