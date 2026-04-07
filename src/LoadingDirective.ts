import {
  AfterViewInit,
  Directive,
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

@Directive({
  selector: '[reviveLoading]',
  standalone: false
})
export class LoadingDirective implements AfterViewInit, OnChanges, OnDestroy {
  private static nextHostId: number = 0;

  @Input('reviveLoading') visible: boolean = false;
  @Input() loadingOptions: AngularLoadingOptions = {};

  @Output() create = new EventEmitter<AngularLoadingEvent>();
  @Output() shown = new EventEmitter<AngularLoadingEvent>();
  @Output() hidden = new EventEmitter<AngularLoadingEvent>();
  @Output() updated = new EventEmitter<AngularLoadingEvent>();
  @Output() destroyed = new EventEmitter<AngularLoadingEvent>();

  @HostBinding('attr.data-rvl-directive-host')
  hostId: string = 'rvl-directive-' + (++LoadingDirective.nextHostId);

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
      controller.initialize(this.loadingOptions, this.visible);
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.initialized || !this.controller) {
      return;
    }

    if (changes.loadingOptions || changes.visible) {
      this.controller.update(this.loadingOptions, this.visible);
    }
  }

  ngOnDestroy(): void {
    if (this.controller) {
      this.controller.destroy();
    }
  }

  getInstance(): any {
    return this.controller ? this.controller.getInstance() : null;
  }

  private ensureController(required: boolean): LoadingController | null {
    if (this.controller) {
      return this.controller;
    }

    var host = this.resolveHostElement();

    if (!host) {
      if (required) {
        throw new Error('Unable to resolve reviveLoading host element.');
      }

      return null;
    }

    this.controller = new LoadingController(host, this.hooks);
    return this.controller;
  }

  private resolveHostElement(): HTMLElement | null {
    if (typeof document !== 'undefined') {
      return document.querySelector('[data-rvl-directive-host="' + this.hostId + '"]') as HTMLElement | null;
    }

    return null;
  }
}
