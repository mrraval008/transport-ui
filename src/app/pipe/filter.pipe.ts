import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: String, property: string): any[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: any[] = [];
    for (let val of value) {
      if (val[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(val);
      }
    }
    return filteredUsers;
  }
}
