import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators"
import { Event } from '../event';
import { logDate } from './test';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  event: Event;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap
      .pipe(map(() => window.history.state))
      this.event = window.history.state.data;
      logDate(this.event.DueDate);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
  

}
