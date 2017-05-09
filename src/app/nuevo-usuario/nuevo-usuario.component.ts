import {Component} from '@angular/core';
import {Usuarios} from '../providers/usuarios';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  usuario = {};
  logged = localStorage.getItem('logged') === 'true';

  constructor(public usuariosService: Usuarios, public router: Router) {
    if (usuariosService.usuario) {
      this.usuario = usuariosService.usuario;
    }
  }

  createOrUpdate() {
    if (this.usuario.hasOwnProperty('_id')) {
      this.usuariosService.update(this.usuario).then(data => {
        console.log(data);
        this.router.navigateByUrl('/mostrar');
      });
    } else {
      this.usuariosService.create(this.usuario).then(data => {
        console.log(data);
        this.router.navigateByUrl('/');
      });
    }
  }

}
