import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { componentFactoryName } from '@angular/compiler';
import { DeletePostagemComponent } from './delete/delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete/delete-tema/delete-tema.component';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'cadastro',component:CadastroComponent},
  {path:'inicio',component:InicioComponent},
  {path: 'login',component:LoginComponent},
  {path: 'tema', component:TemaComponent},

  {path: 'edit-tema/:id', component: EditTemaComponent},
  {path: 'delete-tema/:id', component: DeleteTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
