import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SidebarModule } from 'ng-sidebar';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
 
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
   declarations: [
      AppComponent,
      routingComponents
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      SidebarModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      CarouselModule.forRoot(),
      CommonModule,
      GalleryModule,
      LightboxModule,
      MatDatepickerModule,
      MatNativeDateModule
      
   ],
   providers: [
      MatDatepickerModule,
      MatNativeDateModule,
      MatMomentDateModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
