import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
const routes: Routes = [
  {
  path: "",
  component: GamesListComponent
  },
  {
  path: "topic/:gameId",
  component: TopicListComponent
  },
  {
  path: "contact/:gameId/:topicID",
  component: ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
