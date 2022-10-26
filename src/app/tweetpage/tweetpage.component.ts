import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweetpage',
  templateUrl: './tweetpage.component.html',
  styleUrls: ['./tweetpage.component.css']
})
export class TweetpageComponent implements OnInit {

  constructor(private api:ApiService) {

    this.ViewTweets()
   }

   message=''
  name=localStorage.getItem("stored_name")

  addtweets=()=>{
    let data={
      "userid" :localStorage.getItem("stored_id"),
      "message":this.message
    }
    console.log(data)

    this.api.addTweet(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
     
    )
    this.ViewTweets()
    this.message=''
  }

  ViewTweets=()=>{
    this.api.viewTweets().subscribe(
      (response)=>{
        this.viewTweet=response
        console.log(response)
      }
    )
  }

  viewTweet:any=[]

  ngOnInit(): void {
  }

}
