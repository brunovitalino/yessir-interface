import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/service/autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }

  login() {
    if(this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;
      this.authService.autenticar(email, senha).subscribe({
        next: (value) => {
          //console.log('Autenticado com sucesso', value);
          if (this.authService.isGarcomAutenticado())
            this.router.navigateByUrl('/atendimento');
          else
            this.router.navigateByUrl('/');
          this.loginForm.reset();
        },
        error: (err) => {
          console.log('Problema na autenticação');
        },
      });
    }
  }

}
