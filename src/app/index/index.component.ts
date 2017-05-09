import {Component} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  usuario;
  contrasena;

  admin = {
    usuario: 'admin',
    contrasena: 'admin'
  };

  logged = false;
  error = false;

  constructor() {
    this.logged = localStorage.getItem('logged') === 'true';
    console.log(this.logged);
  }

  login() {
    if (this.usuario === this.admin.usuario && this.contrasena === this.admin.contrasena) {
      this.logged = true;
      localStorage.setItem('logged', 'true');
    } else {
      this.error = true;
    }
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('logged');
  }

}
