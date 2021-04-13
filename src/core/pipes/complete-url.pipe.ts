import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'completeUrl'
})
export class CompleteUrlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return `${environment.apiUrl}/${value}`
    }
    return value;
  }

}
