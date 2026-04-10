import { AngularLoadingOptions, LoadingLifecycleHooks } from './types';
export declare class LoadingController {
    private host;
    private hooks;
    private instance;
    private lastOptions;
    private lastVisible;
    constructor(host: HTMLElement, hooks: LoadingLifecycleHooks);
    initialize(options?: AngularLoadingOptions, visible?: boolean): void;
    update(options?: AngularLoadingOptions, visible?: boolean): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    getInstance(): any;
    destroy(): void;
    private syncVisibility;
    private toCoreOptions;
    private toEvent;
    private cloneOptions;
}
