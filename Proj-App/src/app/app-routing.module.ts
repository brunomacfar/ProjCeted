import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { AcervoComponent } from './acervo/acervo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { InitNavComponent } from './initNav/initNav.component';
import { MuseuComponent } from './museu/museu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavComponent } from './nav/nav.component';
import { NavFooterComponent } from './navFooter/navFooter.component';
import { AtividadeEnsinoComponent } from './atividadeEnsino/atividadeEnsino.component';


// componente para tratar as rotas do site
//  documentaçao https://balta.io/blog/angular-rotas-guardas-navegacao or https://angular.io/guide/router

const routes: Routes = [
 // { path: 'museunacionalcalcado', component: InitNavComponent },
  { path: '', redirectTo: '/museu', pathMatch: 'full'},
  { path: 'museu', component: MuseuComponent },
  { path: 'timeline', component: TimelineComponent},  
  { path: 'agenda',component: AgendaComponent},
  { path: 'ensino', component: AtividadeEnsinoComponent},
  //{ path: 'evento/:id', component: EventoComponent}, 
  { path: 'acervo', component: AcervoComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'contato', component: InformacoesComponent},
  { path: '404', component: MuseuComponent },
  { path: '**', redirectTo: '/museu', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  NavComponent,
  InitNavComponent,
  AcervoComponent,
  AgendaComponent,
  NoticiasComponent,
  InformacoesComponent,
  NavFooterComponent,
  MuseuComponent,
  TimelineComponent
]