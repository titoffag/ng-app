import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {
  loadingStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  set loading(value: boolean) {
    this.loadingStatus$.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
