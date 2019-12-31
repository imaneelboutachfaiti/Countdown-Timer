import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})

export class EventService {  
  url = 'http://localhost:50250/api/Events';
  constructor(private http: HttpClient) { }  
  getAllEvents(): Observable<Event[]> {  
    return this.http.get<Event[]>(this.url + '/EventList');  
  }

  getEventById(id: number): Observable<Event> {  
    return this.http.get<Event>(this.url + '/FindEventById/' + id);  
  } 

  createEvent(event: Event): Observable<Event> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Event>(this.url + '/CreateEvent/',  
    event, httpOptions);  
  }  
  updateEvent(event: Event): Observable<Event> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Event>(this.url + '/UpdateEvent/',  
    event, httpOptions);  
  }  
  deleteEventById(id: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/Delete?id=' +id,  
 httpOptions);  
  } 
}
