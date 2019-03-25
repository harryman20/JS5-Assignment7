import { Injectable } from '@angular/core';
import { Content} from '../content-card/content-card-helper';
import { CONTENT } from '../contentDB';
import { MessageService } from '../message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent(): Content [] {
    return CONTENT;
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content Retrieved!%#!&^%#^&!@*^%#&*!');
    return of (CONTENT);
  }
}
