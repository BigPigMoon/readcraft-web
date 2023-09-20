import {Pipe, PipeTransform} from '@angular/core';
import {Translation, TranslatedWords, Variant} from "../models/translation";

@Pipe({
  name: 'featureFilter'
})
export class FeatureFilterPipe implements PipeTransform {

  transform(items: Translation[], filter: boolean): Translation[] {
    if (!items) {
      return items;
    }
    return items.filter((item: Translation) => item.featured === filter);
  }

}
