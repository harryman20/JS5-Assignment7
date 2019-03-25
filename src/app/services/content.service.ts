import { Injectable } from '@angular/core';
import { Content} from '../content-card/content-card-helper';
import { CONTENT } from '../contentDB';
import { MessageService } from '../message.service';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
            'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentUrl = 'api/CONTENT';

  constructor(private http: HttpClient, private messageService: MessageService ) {
      console.log("Content service running");
  }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>('api/CONTENT');
  }

  addContent (content: Content): Observable<Content> {
    return this.http.post<Content>(this.contentUrl, content, httpOptions).pipe(
      tap((newContent: Content) => console.log(`added content with title=${newContent.title}`)),
      catchError(this.handleError<Content>('addContent'))
    );
  }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content Retrieved!%#!&^%#^&!@*^%#&*!');
    return of (CONTENT);
  }
}
