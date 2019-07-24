import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.scss']
})
export class ExoComponent implements OnInit {

  show=false;
  @Input() title= 'Titre par défaut';

  constructor() { }

  ngOnInit() {
  }
}
