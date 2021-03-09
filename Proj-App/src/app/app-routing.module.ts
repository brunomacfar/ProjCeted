import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAppComponent } from './usuarioApp/usuarioApp.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AcervoComponent } from './acervo/acervo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { InitNavComponent } from './initNav/initNav.component';
import { MuseuComponent } from './museu/museu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventoComponent } from './evento/evento.component';
import { NavbarDeactivateGuard } from './_guards/navbar-deactivate.guard';
import { NavComponent } from './nav/nav.component';
import { NavFooterComponent } from './navFooter/navFooter.component';

const routes: Routes = [
  { path: 'home', component: InitNavComponent },
  { path: 'museu', component: MuseuComponent},
  { path: 'timeline', component: TimelineComponent},  
  { path: 'agenda',component: AgendaComponent},
  { path: 'evento', component: EventoComponent},
  { path: 'acervo', component: AcervoComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'informacoes', component: InformacoesComponent},
  { path: 'usuarioApp', component: UsuarioAppComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  NavComponent,
  InitNavComponent,
  UsuarioAppComponent,
  AcervoComponent,
  AgendaComponent,
  NoticiasComponent,
  InformacoesComponent,
  NavFooterComponent,
  MuseuComponent,
  TimelineComponent,
  EventoComponent]