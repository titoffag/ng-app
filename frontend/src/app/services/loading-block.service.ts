import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {
  private isLoading = false;
  loadingStatus: Subject<boolean> = new Subject();

  get loading(): boolean {
    return this.isLoading;
  }

  set loading(value: boolean) {
    this.isLoading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
