import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Authencation/AuthModels/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseURL:string=environment.baseurl;
  constructor(private httpclient:HttpClient, private router:Router) {
  }

  public login(InputEmail:string,InputPassword:string)
  {
    return this.httpclient.post(this.baseURL+"account/login",InputEmail+""+InputPassword).pipe(
      map((userresponse:any)=>
      {
        let user = userresponse as User;
        if(user.Role=="Admin")
        {
          localStorage.setItem('token',user.Token);
          this.router.navigateByUrl("AdminDashboard");
        }
        else
        if(user.Role=="Employee")
        {
          localStorage.setItem('token',user.Token);
          this.router.navigateByUrl("EmployeeDashboard");
        }
      })
    );
  }

  public register(name:string,accountType:string,phoneNo:string,
                 userName:string,email:string,password:string,
                 role:string)
   {
    const body =
    {
       name:name,
       accountType:accountType,
       phoneNo:phoneNo,
       userName:userName,
       email:email,
       password:password,
       role:role
    }
    return this.httpclient.post(this.baseURL+"Register",body)
  }
}
