import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { combineLatest, Observable } from 'rxjs';

@Pipe({
  name: 'errors'
})
export class ErrorsPipe implements PipeTransform {
  constructor(private translocoService: TranslocoService) {}

  transform(errors: ValidationErrors): Observable<string[]> {
    return combineLatest(
      Object.keys(errors).map(
        (key: string) => this.translocoService.selectTranslate(`error.${key}`, errors[key])
      )
    );
  }
}
