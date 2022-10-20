import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/Services/token.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public LoginForm = this.formBuilder.group (
    {
      userName:['',[Validators.email, Validators.required]],
      password:['',Validators.required]
    }
  )

  constructor(private formBuilder:FormBuilder, private TokenStorageService:TokenService, private service:UserService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("on submit");
    debugger;
    let userName = this.LoginForm.controls["userName"].value;
    let password = this.LoginForm.controls["password"].value;
    if(userName === null){
      userName = "SMAK";
    }
    if(password === null){
       password = "Test@1234";
    }
    this.service.login(userName,password).subscribe(data=>
    {

    },error=>
    {
      console.log("Response",error)
    })
  }

}
