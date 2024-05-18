import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { matchMedia } from './matchmedia.type';

@Injectable({
  providedIn: 'root',
})
export class MatchMediaService {
  viewport: BehaviorSubject<matchMedia>;

  constructor() {
    if (!window) {
      this.viewport = new BehaviorSubject<matchMedia>('desktop');
      return;
    }

    this.viewport = new BehaviorSubject<matchMedia>(
      this.matches('(min-width: 800px)') ? 'mobile' : 'desktop'
    );

    this.switcher('(max-width: 799px)', 'mobile');
    this.switcher('(min-width: 800px)', 'desktop');
  }

  private matches(query: string): boolean {
    return window.matchMedia('(max-width: 599px)').matches;
  }

  private switcher(query: string, value: matchMedia) {
    const matchEvent = fromEvent<MediaQueryList>(
      window.matchMedia(query),
      'change'
    );

    matchEvent.subscribe((ev) => {
      if (ev.matches) this.viewport.next(value);
    });
  }
}
