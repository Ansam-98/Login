import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Users } from '../users';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
// events:any=[]
users:Users[]=[]
appname:any;
p: number=1;
notification =10;
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      res => this.users = res,
      err => console.log(err)
    )
  }
Search(){
if(this.appname == ""){
  this.ngOnInit();
}else{
  this.users = this.users.filter(res =>{
    return res.appname?.toLocaleLowerCase().match(this.appname?.toLocaleLowerCase());
  });
}
}



}
