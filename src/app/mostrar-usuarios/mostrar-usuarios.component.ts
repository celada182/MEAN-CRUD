import {Component, OnInit} from '@angular/core';
import {Usuarios} from "../providers/usuarios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  usuarios;
  logged = localStorage.getItem('logged') === 'true';

  constructor(public usuariosService: Usuarios, public router: Router) {
  }

  ngOnInit() {
    this.usuariosService.read().then(data => {
      console.log(data);
      this.usuarios = data;
    });
  }

  update(usuario) {
    console.log('update: ' + usuario._id);
    this.usuariosService.setUsuario(usuario);
    this.router.navigate(['/nuevo', usuario]);
  }

  delete(usuario) {
    this.usuariosService.delete(usuario).then(data => {
      console.log(data);
    });
    window.location.reload();
  }

}
