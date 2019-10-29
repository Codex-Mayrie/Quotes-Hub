import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.round(value - todayWithNoTime)
    var dateDifferenceSeconds = dateDifference;
    var dateCounter = dateDifferenceSeconds;

    if (dateCounter){
      return dateCounter;
    }else{
      return 0;
    }
  }
}
