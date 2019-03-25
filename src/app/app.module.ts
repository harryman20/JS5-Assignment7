import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { DefaultTypePipe } from './default-type.pipe';
import {FormsModule} from '@angular/forms';
import { TextDecorationDirective } from './text-decoration.directive';
import { LineThroughDirective } from './line-through.directive';
import { MessagesComponent } from './messages/messages.component';
import {MatButtonModule} from'@angular/material';
import {MatInputModule} from'@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    DefaultTypePipe,
    TextDecorationDirective,
    LineThroughDirective,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
