import type { LoaderOptions, StyleObject } from '@revivejs/loading';

export type AngularLoadingStyle = StyleObject;

export interface AngularLoadingOptions extends Omit<LoaderOptions, 'target' | 'visible'> {}

export interface AngularLoadingEvent {
  host: HTMLElement;
  instance: any;
  options: AngularLoadingOptions;
  visible: boolean;
}

export interface LoadingLifecycleHooks {
  onCreate(event: AngularLoadingEvent): void;
  onShown(event: AngularLoadingEvent): void;
  onHidden(event: AngularLoadingEvent): void;
  onUpdated(event: AngularLoadingEvent): void;
  onDestroyed(event: AngularLoadingEvent): void;
}
