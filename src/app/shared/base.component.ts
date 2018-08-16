import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class BaseComponent implements OnDestroy {
  destroy$: Subject<any> = new Subject<any>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
