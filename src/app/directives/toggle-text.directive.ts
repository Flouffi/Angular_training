import { Directive, ElementRef, HostListener, Host, OnInit,OnChanges, Input } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';

@Directive({
  selector: '[appToggleText]'
})
export class ToggleTextDirective implements OnInit, OnChanges  {
  state= false;
  currentText='';
  @Input() color = 'royalblue';

  constructor(private elem: ElementRef) {
    console.log('Constructor')
  }
ngOnInit(){
console.log('On Init...');
this.currentText=this.elem.nativeElement.textContent;

const txt = this.elem.nativeElement.textContent;
if (txt !== 'Hello World' && txt !== 'Bonjour tout le monde'){
  this.elem.nativeElement.style.color = 'royalblue'
}
console.log(this.elem.nativeElement.style.color)


}
ngOnChanges(){
  console.log('On Change')
}
  // @HostListener('click') onclick(): void {
  //   if (this.elem.nativeElement.innerHTML === 'Hello World') {
  //     this.elem.nativeElement.innerHTML = "Salut";
  //   }
  //   else {
  //     this.elem.nativeElement.innerHTML = "Hello World"
  //   }

  // }
@HostListener('click') onClick(): void {
  if(this.state){
    this.elem.nativeElement.textContent= this.currentText;
  }
  else{
    this.elem.nativeElement.textContent="Bonjour tout le monde"
  }
  this.state=!this.state;
}

}
