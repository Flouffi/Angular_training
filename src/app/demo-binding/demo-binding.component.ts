import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent implements OnInit {
  name = '';
  
  constructor() { }

  ngOnInit() {
  }

  updateName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name= input.value;
  }
}
