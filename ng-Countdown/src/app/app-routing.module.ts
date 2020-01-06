import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { EventComponent } from './event/event.component';
const routes: Routes = [ 
  { path: '', component: EventComponent},
  { path: 'countdowntimer', component: TimerComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }