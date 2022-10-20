import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly baseURL:string=environment.baseurl;
  constructor(private httpclient:HttpClient) {
  }

  public login(InputEmail:string,InputPassword:string)
  {
    const body={
      userName:InputEmail,
      password:InputPassword
    }
    return this.httpclient.post(this.baseURL+"Login",body)
  }

  public register(name:string,accountType:string,phoneNo:string,
                 userName:string,email:string,password:string,shopName:string,
                 businessTye:string,role:string)
   {
    const body =
    {
       name:name,
       accountType:accountType,
       phoneNo:phoneNo,
       userName:userName,
       email:email,
       password:password,
       shopName:shopName,
       businessTye:businessTye,
       role:role
    }
    return this.httpclient.post(this.baseURL+"Register",body)
  }
  public getallData()
  {
    return this.httpclient.get(this.baseURL+"Employee/GetEmployee")
  }
  public getpostData()
  {
    return this.httpclient.get(this.baseURL+"posts")
  }

}
