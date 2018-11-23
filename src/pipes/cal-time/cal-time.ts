import { Pipe, PipeTransform } from '@angular/core';
import distance_in_words_to_now from 'date-fns/distance_in_words_to_now';
import zhCN from 'date-fns/locale/zh_cn';
import enUS from 'date-fns/locale/en';
import { distanceInWordsToNow } from 'date-fns';


/**
 * Generated class for the CalTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'calTime',
})
export class CalTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    const locale=args[0] == 'zh' ? zhCN : enUS;
    return distanceInWordsToNow(new Date(value),{
      addSuffix:true,
      locale
    })

    // return value.toLowerCase();
  }
}
