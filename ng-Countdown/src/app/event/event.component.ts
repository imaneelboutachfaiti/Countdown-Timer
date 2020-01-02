
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs'; 
import { EventService } from '../event.service';
import {Event} from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  dataSaved = false;  
  eventForm: any;  
  allEvents: Observable<Event[]>;  
  eventIdUpdate = null;  
  message = null;
  events: Event[];

  constructor(private formbulider: FormBuilder, private eventService:EventService) { }  
  
  ngOnInit() {  
    this.eventForm = this.formbulider.group({  
      EventName: ['', [Validators.required]],  
      DueDate: ['', [Validators.required]]  
    });  
    this.loadAllEvents();
  }

  loadAllEvents() {
    this.eventService.getAllEvents().subscribe(events => this.events = events);  
  }
  
  loadEventToEdit(Id: number) {  
    this.eventService.getEventById(Id).subscribe(event=> {  
      this.message = null;  
      this.dataSaved = false;  
      this.eventIdUpdate = event.Id;  
      this.eventForm.controls['EventName'].setValue(event.EventName);  
     this.eventForm.controls['DueDate'].setValue(event.DueDate); 
    });  
  
  }
  CreateEvent(event: Event) {  
    if (this.eventIdUpdate == null) {  
      this.eventService.createEvent(event).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'event saved Successfully';  
          this.loadAllEvents();  
          this.eventIdUpdate = null;  
          this.eventForm.reset();  
        }  
      );  
    } else {  
      event.Id = this.eventIdUpdate;  
      this.eventService.updateEvent(event.Id,event).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'event Updated Successfully';  
        this.loadAllEvents();  
        this.eventIdUpdate = null;  
        this.eventForm.reset();  
      });  
    }  
  }   
  deleteEvent(eventId: number) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.eventService.deleteEventById(eventId).subscribe(() => {  
      this.dataSaved = true;  
      this.message = 'event Deleted Succefully';  
      this.loadAllEvents();  
      this.eventIdUpdate = null;  
      this.eventForm.reset();  
  
    });  
  }  
}  
onFormSubmit() {  
  this.dataSaved = false;  
  const event = this.eventForm.value;  
  this.CreateEvent(event);  
  this.eventForm.reset();  
}
  resetForm() {  
    this.eventForm.reset();  
    this.message = null;  
    this.dataSaved = false;  
  }  
} 
   


