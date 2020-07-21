import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAppComponent } from './usuarioApp/usuarioApp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AcervoComponent } from './acervo/acervo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { InitNavComponent } from './initNav/initNav.component';
import { MuseuComponent } from './museu/museu.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventoComponent } from './evento/evento.component';

const routes: Routes = [
  { path: '', component: InitNavComponent},
  { path: 'usuarioApp', component: UsuarioAppComponent},
  { path: 'museu', component: MuseuComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'evento', component: EventoComponent },
  { path: 'acervo', component: AcervoComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'informacoes', component: InformacoesComponent},
  { path: 'inicial', component: InitNavComponent},
  { path: 'timeline', component: TimelineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
