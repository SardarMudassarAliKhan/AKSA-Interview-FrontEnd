import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseurl = environment.baseurl
   constructor(private http:HttpClient,private router:Router) {

   }
   // getCurruntuserValue()
   // {
   //   return this.curruntUserSource.value;
   // }

   logout()
   {
     localStorage.removeItem('token');
     this.router.navigateByUrl('/');
   }
   checkemailexists(email:string)
   {
     return this.http.get(this.baseurl+'account/emailexists?Email='+email)
   }

 }
