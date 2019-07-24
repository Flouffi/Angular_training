import { Component, OnInit, OnChanges, ElementRef, HostListener } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }
  
  ngOnChanges(){
    
  }

  ngOnInit() {
  }
  title: string;
  name ='Florian';
  twittes: Message[]=[];

  saveTweet(data: Message):void {
    this.twittes.push(data);
  }
}
