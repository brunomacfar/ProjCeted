import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  visible: boolean;
  // Serviço de habilitar ou desabilitar visualização do navbar, hoje está desabilitado - não usado mais em versão atual do sistema. 2021
  constructor() { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }
}
