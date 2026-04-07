import { ModuleWithProviders } from '@angular/core';
import { LoadingComponent } from './LoadingComponent';
import { LoadingDirective } from './LoadingDirective';
import { LoadingService } from './LoadingService';
export declare class LoadingModule {
    static forRoot(): ModuleWithProviders<LoadingModule>;
}
export { LoadingComponent, LoadingDirective, LoadingService };
export { AngularLoadingEvent, AngularLoadingOptions, AngularLoadingStyle } from './types';
