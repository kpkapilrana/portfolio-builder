import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |Promise<boolean> {
    const isExist = localStorage.getItem("data") ? true : false;
    if(!isExist){
        this.router.navigate(['/'])
    }
    return isExist;
  }
}
