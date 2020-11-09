import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal/public_api';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../_models/Usuario';
import { UsuarioService } from '../_services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-usuarioApp',
  templateUrl: './usuarioApp.component.html',
  styleUrls: ['./usuarioApp.component.css']
})
export class UsuarioAppComponent implements OnInit {

  _filtroLista: string;
  usuariosFiltrados: Usuario[];
  usuariosApp: Usuario[];
  usuarioApp: Usuario;    //utilizado para filtragem e  sinlge
  modoSalvar = 'put';
  bodyDeletarUsuario = '';

  imgLargura = 50;
  imgMargem = 2;
  mostrarImagem = false;
  modalRef: BsModalRef;
  registerForm: FormGroup;

  constructor(private usuarioService: UsuarioService
            , private fb: FormBuilder
            , private modalService: BsModalService
            , private toastr: ToastrService
            , private router: Router ) { }

  ngOnInit() {
    this.getUsuariosApp();
    this.validation();
  }

  filtrarUsuarios(filtrarPor: string): Usuario[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.usuariosApp.filter(
      usuarioApp => usuarioApp.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  get filtroLista(): string{
    return this._filtroLista;
  }
  set filtroLista(value: string){
    this._filtroLista = value;
    this.usuariosFiltrados = this.filtroLista ? this.filtrarUsuarios(this.filtroLista) : this.usuariosApp;
  }
  openModal(template: any){
    this.registerForm.reset();
    template.show();
  }

  novoUsuario(template: any){
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }

  getUsuariosApp(){
    this.usuarioService.getUsuarios().subscribe(
      // tslint:disable-next-line: variable-name
      (_usuarios: Usuario[]) => {
       this.usuariosApp = _usuarios;
       this.usuariosFiltrados = this.usuariosApp;
       console.log(_usuarios);
    }, error => {
      console.log(error);
    });
  }

  salvarAlteracao(template: any){
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post'){
        this.usuarioApp = Object.assign({}, this.registerForm.value);
        console.log(this.usuarioApp);
        this.usuarioService.postUsuario(this.usuarioApp).subscribe(
          (novoUsuario: Usuario) => {
            template.hide();
            this.getUsuariosApp();
            this.toastr.success('Inserido com sucesso!!');
          }, error => {
            //console.info();
            console.error(error);
            this.toastr.error(`Problema na Inserção ${error}`);

           }
        );
       } else {
        this.usuarioApp = Object.assign({id: this.usuarioApp.id}, this.registerForm.value);
        console.log(this.usuarioApp);
        this.usuarioService.putUsuario(this.usuarioApp).subscribe(
          () => {
           template.hide();
           this.getUsuariosApp();
           this.toastr.success('Editado com sucesso!!');

          }, error => {
            console.error();
            this.toastr.error(`Problema ao atualizar ${error}`);

          }
        );
       }
    }
  }

  editarUsuario(usuario: Usuario, template: any){
    this.modoSalvar = 'put';
    this.openModal(template);
    this.usuarioApp = usuario;
    this.registerForm.patchValue(this.usuarioApp);
  }

  excluirUsuario(usuario: Usuario, template: any){
    this.openModal(template);
    this.usuarioApp = usuario;
    this.bodyDeletarUsuario = `Tem certeza que deseja deletar o usuário: ${usuario.nome}`;
  }

  confirmeDelete(template: any){
    this.usuarioService.deleteUsuario(this.usuarioApp.id).subscribe(
      () => {
        template.hide();
        this.getUsuariosApp();
      }, error => {
        console.log(error);
      }
    );
  }

  validation(){
    this.registerForm = this.fb.group({
      nome: new FormControl('', Validators.required),
      matricula: new FormControl('',
        [
          Validators.minLength(7),
          Validators.maxLength(7),
        ]),
      cpf: new FormControl('',
        [
          Validators.minLength(11),
          Validators.maxLength(11)
        ]),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]),
      telefone: new FormControl('', Validators.required),
      setor: new FormControl(''),
      cargo: new FormControl(''),
      senha: new FormControl('', Validators.required ),
      imgUrl: new FormControl('')
    });
  }






}
