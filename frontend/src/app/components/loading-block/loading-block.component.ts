import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingBlockService } from '@services/loading-block.service';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  loading = false;
  loadingSubscription: Subscription;

  constructor(private loadingBlockService: LoadingBlockService) {}

  ngOnInit() {
    this.loadingSubscription = this.loadingBlockService.loadingStatus.subscribe(
      value => (this.loading = value)
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

@NgModule({
  declarations: [LoadingBlockComponent],
  imports: [SharedModule],
  exports: [LoadingBlockComponent]
})
export class LoadingBlockModule {}
