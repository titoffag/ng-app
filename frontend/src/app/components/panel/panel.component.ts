import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { SharedModule } from 'src/app/shared.module';
import { appRoutesNames } from '@views/app.routes.names';
import { AppState } from '@store/reducers';
import * as fromCourses from '@store/courses';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {
  search = new FormControl('');
  searchSub: Subscription;
  faPlus = faPlus;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.searchSub = this.search.valueChanges
      .pipe(
        debounceTime(500),
        filter(this.isMoreThanCharsOrEmptyString(3)),
        distinctUntilChanged()
      )
      .subscribe(search =>
        this.store.dispatch(fromCourses.searchCourses({ search }))
      );
  }

  isMoreThanCharsOrEmptyString(amount: number) {
    return (value: string): boolean => {
      return value.length >= amount || value === '';
    };
  }

  addCourse() {
    this.router.navigate([appRoutesNames.NEW_COURSE]);
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }
}

@NgModule({
  declarations: [PanelComponent],
  imports: [SharedModule],
  exports: [PanelComponent]
})
export class PanelComponentModule {}
