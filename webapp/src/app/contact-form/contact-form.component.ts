import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.gameId = params['gameId'];
      this.topicId = params['topicId'];
    });
  }
  public gameId;
  public topicId;
  ngOnInit() {

  }
  onSubmit(f: NgForm) {
    console.log(f.value.email); 
    const body = {
      gameId: this.gameId,
      topicId: this.topicId,
      email: f.value.email
    }
    this.appService.submitContact(body).subscribe((res) =>{
      this.router.navigate(["/"]);
    })
  }

}
