import { inject } from "@angular/core"
import { UserService } from "../service/user.service"
import { Router } from "@angular/router";

export const mesaAuthGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isMesa()) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
}