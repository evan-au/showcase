import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charSlice',
})
export class CharacterSlicerPipe implements PipeTransform {
  transform(value: string | null, charAmount = 1): string {
    if (value) {
      return value.trim().slice(0, charAmount);
    }
    return 'HI';
  }
}
