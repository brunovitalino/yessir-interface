import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule
  ],
  exports: [
    CadastroComponent,
    LoginComponent
  ]
})
export class AutenticacaoModule { }
