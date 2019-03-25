import { Pipe, PipeTransform } from '@angular/core';
import { Content} from './content-card/content-card-helper';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {
    transform(contentList: Content[], type: string): any {
        return contentList.filter(c => c.type != null ? c.type === type : null);
    }
}
