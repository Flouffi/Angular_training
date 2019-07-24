import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  quote : Quote = {} as Quote;


  constructor(private http: HttpClient) {


    }

  ngOnInit() {
    interval(5000).subscribe(()=> this.getQuote())
    this.getQuote();
  }

  getQuote():void {
    this.http.get<Quote>('https://api.chucknorris.io/jokes/random').pipe(map(data =>data)).subscribe(
      (quote : Quote ) =>{
        this.quote= quote;
    },
    err =>{
      console.log(err)
    }
    
    );
  }

}
