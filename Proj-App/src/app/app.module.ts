import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HashLocationStrategy, LocationStrategy  } from "@angular/common";


import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { LOCALE_ID } from "@angular/core";


import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';



import { FlexLayoutModule } from '@angular/flex-layout';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SidebarModule } from 'ng-sidebar';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtividadeEnsinoComponent } from './atividadeEnsino/atividadeEnsino.component';
import { AcervoComponent } from './acervo/acervo.component';
registerLocaleData(localeBr);

// Aqui são importados os componentes utilizados na aplicação

@NgModule({
   declarations: [			
      AppComponent,
      routingComponents,
      AtividadeEnsinoComponent,
      AcervoComponent
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
      MatNativeDateModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      FlexLayoutModule,
      MatFormFieldModule,
      MatSelectModule,
      MatTabsModule,
      MatGridListModule
   
   ],
   providers: [
      { provide: LOCALE_ID, useValue: 'pt-BR' },
      {provide: LocationStrategy, useClass: HashLocationStrategy}, //Resposável pelo roteamento documentaçao disponvel https://medium.com/@dao.houssene/angular-the-hash-trap-b2d415c2c241
      MatDatepickerModule,
      MatNativeDateModule,
      MatMomentDateModule
      
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
