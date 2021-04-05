import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us:UserService,private rt:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(userObj)
  {
    this.us.registerUser(userObj).subscribe(
      res=>{
        if(res["message"] == "success")
        {
          //alert("Registration successfull");
          this.toastr.success("registration successful","register"),
          this.rt.navigateByUrl("/login");
          
          
        }
        else
        {
          //alert(res["message"]);
          this.toastr.error("error","title");
        }
        
        
      },
      err => {
        console.log(err);
        this.toastr.error("something went wrong...Try again...","title");
        //alert("Something went Wrong...Try again...");
      }

    )
  }

  login()
  {
    this.rt.navigateByUrl("/login");
  }

}
