import { createLoader } from '@revivejs/loading';
import { AngularLoadingEvent, AngularLoadingOptions, LoadingLifecycleHooks } from './types';

export class LoadingController {
  private host: HTMLElement;
  private hooks: LoadingLifecycleHooks;
  private instance: any;
  private lastOptions: AngularLoadingOptions;
  private lastVisible: boolean;

  constructor(host: HTMLElement, hooks: LoadingLifecycleHooks) {
    this.host = host;
    this.hooks = hooks;
    this.instance = null;
    this.lastOptions = {};
    this.lastVisible = false;
  }

  initialize(options?: AngularLoadingOptions, visible?: boolean): void {
    if (this.instance) {
      return;
    }

    this.lastOptions = this.cloneOptions(options);
    this.lastVisible = !!visible;
    this.instance = createLoader(this.toCoreOptions(this.lastOptions));
    this.hooks.onCreate(this.toEvent(this.lastOptions, this.lastVisible));
    this.syncVisibility(this.lastVisible);
  }

  update(options?: AngularLoadingOptions, visible?: boolean): void {
    var nextOptions: AngularLoadingOptions = this.cloneOptions(options);
    var nextVisible: boolean = !!visible;

    if (!this.instance) {
      this.initialize(nextOptions, nextVisible);
      return;
    }

    this.lastOptions = nextOptions;
    this.lastVisible = nextVisible;
    this.instance.update(this.toCoreOptions(this.lastOptions));
    this.hooks.onUpdated(this.toEvent(this.lastOptions, this.lastVisible));
    this.syncVisibility(this.lastVisible);
  }

  show(): Promise<void> {
    if (!this.instance) {
      this.initialize(this.lastOptions, true);
    }

    this.lastVisible = true;

    return this.instance.show().then(() => {
      this.hooks.onShown(this.toEvent(this.lastOptions, true));
    });
  }

  hide(): Promise<void> {
    if (!this.instance) {
      return Promise.resolve();
    }

    this.lastVisible = false;

    return this.instance.hide().then(() => {
      this.hooks.onHidden(this.toEvent(this.lastOptions, false));
    });
  }

  getInstance(): any {
    return this.instance;
  }

  destroy(): void {
    if (!this.instance) {
      return;
    }

    this.instance.destroy();
    this.hooks.onDestroyed(this.toEvent(this.lastOptions, this.lastVisible));
    this.instance = null;
  }

  private syncVisibility(visible: boolean): void {
    if (visible) {
      this.show();
      return;
    }

    this.hide();
  }

  private toCoreOptions(options: AngularLoadingOptions): any {
    var next: any = this.cloneOptions(options);

    delete next.visible;
    next.target = this.host;
    next.visible = false;

    return next;
  }

  private toEvent(options: AngularLoadingOptions, visible: boolean): AngularLoadingEvent {
    return {
      host: this.host,
      instance: this.instance,
      options: this.cloneOptions(options),
      visible: visible
    };
  }

  private cloneOptions(options?: AngularLoadingOptions): AngularLoadingOptions {
    if (!options) {
      return {};
    }

    return Object.assign({}, options, {
      style: options.style ? Object.assign({}, options.style) : undefined
    });
  }
}
