import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';

import { LoadingController } from './LoadingController';
import { AngularLoadingEvent, AngularLoadingOptions } from './types';

@Component({
  selector: 'revive-loading',
  standalone: false,
  template: ''
})
export class LoadingComponent implements AfterViewInit, OnChanges, OnDestroy {
  private static nextHostId: number = 0;

  @Input() options: AngularLoadingOptions = {};
  @Input() visible: boolean = true;

  @Output() create = new EventEmitter<AngularLoadingEvent>();
  @Output() shown = new EventEmitter<AngularLoadingEvent>();
  @Output() hidden = new EventEmitter<AngularLoadingEvent>();
  @Output() updated = new EventEmitter<AngularLoadingEvent>();
  @Output() destroyed = new EventEmitter<AngularLoadingEvent>();

  @HostBinding('attr.data-rvl-component-host')
  hostId: string = 'rvl-component-' + (++LoadingComponent.nextHostId);

  private controller: LoadingController | null;
  private initialized: boolean;
  private hooks: any;

  constructor() {
    this.initialized = false;
    this.controller = null;
    this.hooks = {
      onCreate: (event: AngularLoadingEvent) => this.create.emit(event),
      onShown: (event: AngularLoadingEvent) => this.shown.emit(event),
      onHidden: (event: AngularLoadingEvent) => this.hidden.emit(event),
      onUpdated: (event: AngularLoadingEvent) => this.updated.emit(event),
      onDestroyed: (event: AngularLoadingEvent) => this.destroyed.emit(event)
    };
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      var controller = this.ensureController(false);

      if (!controller) {
        return;
      }

      this.initialized = true;
      controller.initialize(this.options, this.resolveVisible());
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.initialized || !this.controller) {
      return;
    }

    if (changes.options || changes.visible) {
      this.controller.update(this.options, this.resolveVisible());
    }
  }

  ngOnDestroy(): void {
    if (this.controller) {
      this.controller.destroy();
    }
  }

  show(): Promise<void> {
    this.visible = true;
    return this.ensureController(true)!.show();
  }

  hide(): Promise<void> {
    this.visible = false;
    var controller = this.ensureController(false);

    return controller ? controller.hide() : Promise.resolve();
  }

  getInstance(): any {
    return this.controller ? this.controller.getInstance() : null;
  }

  private resolveVisible(): boolean {
    if (typeof this.visible === 'boolean') {
      return this.visible;
    }

    return this.options && this.options.hasOwnProperty('visible') ? !!(this.options as any).visible : true;
  }

  private ensureController(required: boolean): LoadingController | null {
    if (this.controller) {
      return this.controller;
    }

    var host = this.resolveHostElement();

    if (!host) {
      if (required) {
        throw new Error('Unable to resolve revive-loading host element.');
      }

      return null;
    }

    this.controller = new LoadingController(host, this.hooks);
    return this.controller;
  }

  private resolveHostElement(): HTMLElement | null {
    if (typeof document !== 'undefined') {
      return document.querySelector('[data-rvl-component-host="' + this.hostId + '"]') as HTMLElement | null;
    }

    return null;
  }
}
