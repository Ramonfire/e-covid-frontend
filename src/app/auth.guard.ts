  import { Injectable } from '@angular/core';
  import {  CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

  @Injectable({
    providedIn: 'root'
  })


  export class AuthGuard implements CanActivate {
    isAuthenticated: boolean=false;
    constructor(private tokenStorageService: TokenStorageService, private router: Router) { 
    }
    
    canActivate(){
      this.isAuthenticated=!!this.tokenStorageService.getToken();

      if(this.isAuthenticated){
        return  true ;
      }
      this.router.navigate(['/auth/login']);

      return false;
    }
      
    }
    

