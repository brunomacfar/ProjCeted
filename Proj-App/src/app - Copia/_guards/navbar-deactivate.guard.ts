import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NavComponent } from '../nav/nav.component';

export interface DeactivateComponent {
    deactivateComponent(): boolean;
  }

@Injectable()
export class NavbarDeactivateGuard implements CanDeactivate<NavComponent> {

    canDeactivate(
        component: NavComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log("Guarda de desativaçaão em ação");

        return true;
    }
   
}
