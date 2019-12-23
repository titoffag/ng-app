import { Component, NgModule } from '@angular/core';

import { LoadingBlockService } from '@services/loading-block.service';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent {
  loading$ = this.loadingBlockService.loadingStatus$;

  constructor(private loadingBlockService: LoadingBlockService) {}
}

@NgModule({
  declarations: [LoadingBlockComponent],
  imports: [SharedModule],
  exports: [LoadingBlockComponent]
})
export class LoadingBlockModule {}
