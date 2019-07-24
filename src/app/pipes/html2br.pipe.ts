import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'html2br'
})
export class Html2brPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(/\n/g, '<br>')
  }

}
