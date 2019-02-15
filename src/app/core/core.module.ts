import { NgModule } from '@angular/core';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import * as fromContainers from './containers';
import * as fromComponents from './components'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...fromContainers.containers,...fromComponents.components],
  imports: [
    UiKitModule,
    RouterModule.forChild(fromContainers.routes)
  ]
})
export class CoreModule { }
