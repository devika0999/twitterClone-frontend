import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtweet',
  templateUrl: './viewtweet.component.html',
  styleUrls: ['./viewtweet.component.css']
})
export class ViewtweetComponent implements OnInit {

  constructor(private api:ApiService) {

    this.fetchTweets()

   }

   fetchTweets=()=>{
    let data={
      userid:localStorage.getItem("stored_id")
    }

    this.api.viewMyTweet(data).subscribe(
      (response:any)=>{
        this.myTweets =response
        console.log(response);
      }
    )

   }

   myTweets:any = []

  ngOnInit(): void {
  }

}
