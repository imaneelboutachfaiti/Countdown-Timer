import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  events: string[];
  ngOnInit() {
    this.httpService.get('http://localhost:50250/api/Events/EventList').subscribe( 
      data => {  
        this.events = data as string [];  
       }  
     );  
  }

}
