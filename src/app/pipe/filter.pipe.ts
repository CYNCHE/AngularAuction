import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterFiled: string, keyword:string): any {

    // if no field or no keyword is specified,
    // we do not need to do any processing
    if (!filterFiled || !keyword) {
      return list;
    }

    // return the items that contains the keyword
    // in the specified field
    return list.filter(item => {
      let fieldValue = item[filterFiled];
      return fieldValue.indexOf(keyword) >= 0;
    })
  }

}
