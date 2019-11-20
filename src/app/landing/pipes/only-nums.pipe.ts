import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'onlyNumsPipe'
})
export class OnlyNumsPipe implements PipeTransform {
    transform(value: string, args?: 1): string {
        return value.match(/\d+/g).join('');
    }
}
