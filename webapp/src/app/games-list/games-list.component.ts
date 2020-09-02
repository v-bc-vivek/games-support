import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }
  public gamesList;
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.appService.getGamesList().subscribe((res:any) => { // we can define a interface accordinly due to time issue Adding any
      this.gamesList = res.data;
    })
  }
  goToNextSreen(gameId) {
    this.router.navigate(["topic", gameId]);
  }
}
