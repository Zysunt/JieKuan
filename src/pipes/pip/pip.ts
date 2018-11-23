
import { Pipe, PipeTransform } from '@angular/core';
import distance_in_words_to_now from 'date-fns/distance_in_words_to_now';
import zhCN from 'date-fns/locale/zh_cn';
import enUS from 'date-fns/locale/en';
import { distanceInWordsToNow } from 'date-fns';

@Pipe({
  name: 'pip',
})
export class PipPipe implements PipeTransform {


transform(value: string, ...args) {
  const locale=args[0] == 'zh' ? zhCN : enUS;
  return distanceInWordsToNow(new Date(value),{
    addSuffix:true,
    locale
  });
}
}
