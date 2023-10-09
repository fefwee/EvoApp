import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RoleModelService } from '../services/role-model.service';
import { Observable } from 'rxjs';

export const roleAccessGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const service = inject(RoleModelService);
    const router = inject(Router);

    if (service.role === 'admin') {
      return true;
    } else {
      return router.navigateByUrl('/error');
    }
  };
