import { Injectable } from '@angular/core';
import { createLoader, hideLoader, mountLoader, showLoader } from '@stackline/loading';

import { AngularLoadingOptions } from './types';

@Injectable()
export class LoadingService {
  create(target: HTMLElement, options?: AngularLoadingOptions): any {
    var nextOptions: any = Object.assign({}, options || {}, {
      target: target,
      visible: false
    });
    var instance = createLoader(nextOptions);

    if (options && (options as any).visible) {
      instance.show();
    }

    return instance;
  }

  show(target: HTMLElement, options?: AngularLoadingOptions): any {
    return showLoader(target, options || {});
  }

  mount(target: HTMLElement, options?: AngularLoadingOptions): any {
    return mountLoader(target, options || {});
  }

  hide(instance: any): Promise<void> {
    return hideLoader(instance);
  }
}
