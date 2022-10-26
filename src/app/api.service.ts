import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signUpData=(data:any)=>{
    return this.http.post("http://localhost:8080/signup",data)
  }

  login=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }

  addTweet=(data:any)=>{
    return this.http.post("http://localhost:8080/addpost",data)
  }

  viewTweets=()=>{
    return this.http.get("http://localhost:8080/viewposts")
  }
  viewMyTweet=(data:any)=>{
    return this.http.post("http://localhost:8080/individual",data)
  }

}
