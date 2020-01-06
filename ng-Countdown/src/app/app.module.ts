import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule
} from '@angular/material';   
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventService } from './event.service';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './timer/timer.component';
import { 
  OwlDateTimeModule, 
  OwlNativeDateTimeModule 
} from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,   
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    AppRoutingModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],
  providers: [MatDatepickerModule,EventService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
