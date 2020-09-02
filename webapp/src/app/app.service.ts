import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: "root"
})
export class AppService {

  constructor(private http: HttpClient) { }

  getGamesList() {
    return this.http.get(`${environment.apiUrl}/games/gameslist`);
  }
  getTopicsList() {
    return this.http.get(`${environment.apiUrl}/games/topics`);
  }
  submitContact(body) {
    return this.http.post(`${environment.apiUrl}/games/submit`, body);
  }

}
