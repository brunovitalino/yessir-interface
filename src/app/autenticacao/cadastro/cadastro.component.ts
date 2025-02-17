import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaUsuaria } from 'src/app/core/model/type';
import { CadastroService } from 'src/app/core/service/cadastro.service';
import { FormularioService } from 'src/app/core/service/formulario.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro);
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['auth/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err);
        }
      });
    }
  }

}
