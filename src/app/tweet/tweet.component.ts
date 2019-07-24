import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import {Message} from '../models/message.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  title='';
  content='';

   @Output() Tweet: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

onSend(): void{
  this.Tweet.emit({
    title: this.title,
    content: this.content
  }); 
  this.title= '';
  this.content='';
 }
}
