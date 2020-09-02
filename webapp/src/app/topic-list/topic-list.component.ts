import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.gameId = params['gameId'];
    });
  }

  public topicList;
  public gameId;
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.appService.getTopicsList().subscribe((res:any) => { // we can define a interface accordinly due to time issue Adding any
      this.topicList = res.data;
    })
  }
  goToNextSreen(topicId) {
    this.router.navigate(["contact", this.gameId, topicId ]);
  }

}
