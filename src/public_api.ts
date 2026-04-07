import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoadingComponent } from './LoadingComponent';
import { LoadingDirective } from './LoadingDirective';
import { LoadingService } from './LoadingService';

var LOADING_DECLARATIONS: any[] = [
  LoadingComponent,
  LoadingDirective
];

@NgModule({
  declarations: LOADING_DECLARATIONS,
  exports: LOADING_DECLARATIONS
})
export class LoadingModule {
  static forRoot(): ModuleWithProviders<LoadingModule> {
    return {
      ngModule: LoadingModule,
      providers: [LoadingService]
    };
  }
}

export { LoadingComponent, LoadingDirective, LoadingService };
export { AngularLoadingEvent, AngularLoadingOptions, AngularLoadingStyle } from './types';
