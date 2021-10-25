import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NavComponent } from '../nav/nav.component';

export interface DeactivateComponent {
    deactivateComponent(): boolean;
  }

@Injectable()
export class NavbarDeactivateGuard implements CanDeactivate<NavComponent> {
    // COmponente desabilitado - não usado mais em versão atual do sistema.
    canDeactivate(
        component: NavComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log("Guarda de desativaçaão em ação");

        return true;
    }
   
}
