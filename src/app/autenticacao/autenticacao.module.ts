import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { CadastroComponent } from './cadastro/cadastro.component';
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
