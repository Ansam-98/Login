import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions ={
    headers : this.headers
  }
  private _eventsUrl = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<Users[]>(this._eventsUrl)
  }



}
