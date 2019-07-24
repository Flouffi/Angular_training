import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputText]'
})
export class InputTextDirective {

  constructor(private elem: ElementRef) { 
    
    const e = elem.nativeElement;
    e.style.border= '1px solid #333'; // nativeElement l'élément en question
    e.style.width = '100%';
    e.style.paddingLeft = '5px';



  }
 
//  @HostListener('click') myClick(): void { // Plus élégant qu'un addEventListener
//    this.elem.nativeElement.style.borderColor = 'orangered'

@HostListener('focus') onFocus(): void{
  this.elem.nativeElement.style.borderColor='Royalblue';
}
@HostListener('blur') onBlur(): void{
  this.elem.nativeElement.style.borderColor='#333';
}
 
}
