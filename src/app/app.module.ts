import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {NuevoUsuarioComponent} from './nuevo-usuario/nuevo-usuario.component';
import {MostrarUsuariosComponent} from './mostrar-usuarios/mostrar-usuarios.component';
import {Usuarios} from './providers/usuarios';

const ROUTES = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'nuevo',
    component: NuevoUsuarioComponent
  },
  {
    path: 'mostrar',
    component: MostrarUsuariosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NuevoUsuarioComponent,
    MostrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Usuarios],
  bootstrap: [AppComponent]
})
export class AppModule {
}
