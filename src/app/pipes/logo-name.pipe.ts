import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logoName'
})
export class LogoNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.split(" ").map(n => n[0]).join("");
  }

}
