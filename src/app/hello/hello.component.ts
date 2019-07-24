import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  // template: '<h1 class="title">Hello World {{text}}</h1>',
   styleUrls: ['./hello.component.scss']
  // styles: [`
  // .title {
  //   color:red;
  // }
  // `]
})
export class HelloComponent implements OnInit {

  text='';
  name:string;
  // value=true;
  constructor() { }

  ngOnInit() {
  }

  sayHello(name:string):string{
    return 'Hello'+ name;
  }

  toast(event: Event): void{
    console.log(event);
    const button = event.target as HTMLButtonElement; //transformation typage
    button.style.backgroundColor= 'yellow';
  }
}
