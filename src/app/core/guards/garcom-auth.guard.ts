import { inject } from "@angular/core"
import { UserService } from "../service/user.service"
import { Router } from "@angular/router";

export const garcomAuthGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isGarcom()) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
}