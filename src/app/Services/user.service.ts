import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseURL:string=environment.baseurl;
  constructor(private httpclient:HttpClient) {
  }

  public login(InputEmail:string,InputPassword:string)
  {
    return this.httpclient.post(this.baseURL+"account/login",InputEmail+""+InputPassword).pipe(
      map((user:IUser)=>
      {
        if(user.Role=="Admin")
        {
          localStorage.setItem('token',user.token);
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
