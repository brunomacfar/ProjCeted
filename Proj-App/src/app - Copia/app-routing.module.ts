import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
//import { AcervoComponent } from './acervo/acervo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { InitNavComponent } from './initNav/initNav.component';
import { MuseuComponent } from './museu/museu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarDeactivateGuard } from './_guards/navbar-deactivate.guard';
import { NavComponent } from './nav/nav.component';
import { NavFooterComponent } from './navFooter/navFooter.component';
import { AtividadeEnsinoComponent } from './atividadeEnsino/atividadeEnsino.component';

const routes: Routes = [
  { path: 'museunacionalcalcado', component: InitNavComponent },
  { path: 'museu', component: MuseuComponent},
  { path: 'timeline', component: TimelineComponent},  
  { path: 'agenda',component: AgendaComponent},
  { path: 'ensino', component: AtividadeEnsinoComponent},
  //{ path: 'evento/:id', component: EventoComponent},
  //{ path: 'acervo', component: AcervoComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'informacoes', component: InformacoesComponent},
  { path: '404', component: InitNavComponent },
  { path: '', redirectTo: 'museunacionalcalcado'},
  { path: '**', redirectTo: 'museunacionalcalcado' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  NavComponent,
  InitNavComponent,
  //AcervoComponent,
  AgendaComponent,
  NoticiasComponent,
  InformacoesComponent,
  NavFooterComponent,
  MuseuComponent,
  TimelineComponent
]