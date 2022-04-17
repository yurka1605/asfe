import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return !!route?.data?.['preload'] ? load() : of(null);
  }
}
