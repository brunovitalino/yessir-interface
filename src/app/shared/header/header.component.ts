import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/service/user.service';
import { PessoaUsuaria } from '../model/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<PessoaUsuaria>

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initUsusarioInfo();
    this.isUserMesa();
  }
  
  initUsusarioInfo(): void {
    this.user$ = this.userService.retornarUser();
  }
  
  logout() {
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }
  
  isUserMesa() {
    return this.userService.isAdmin() || this.userService.isMesa();
  }
  
  isUserGarcom() {
    return this.userService.isAdmin() || this.userService.isGarcom();
  }

}
