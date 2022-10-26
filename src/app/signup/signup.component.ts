import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

        name =""
        dob=""
        mobile= ""
        place =""
        email=""
        password =""

        readValues=()=>{
          let data={

            "name":this.name,
            "dob" : this.dob,
            "mobile" : this.mobile,
            "place" : this.place,
            "email" : this.email,
            "password" : this.password
          }
          console.log(data)

          this.myapi.signUpData(data).subscribe(
            (response)=>{
              console.log(response)
              
            }
            
          )
          alert("data added")     
                   
        }

  ngOnInit(): void {
  }

}
