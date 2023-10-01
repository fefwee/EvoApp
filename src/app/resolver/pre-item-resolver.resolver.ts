import { inject } from '@angular/core';
import { RequestDataService } from '../services/request-data.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
};

export const PreItemResolver: ResolveFn<IPost> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(RequestDataService).resolvePost();
  };
