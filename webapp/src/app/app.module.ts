import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    TopicListComponent,
    ContactFormComponent,
    SingleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
