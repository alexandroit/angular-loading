import { AngularLoadingOptions } from './types';
export declare class LoadingService {
    create(target: HTMLElement, options?: AngularLoadingOptions): any;
    show(target: HTMLElement, options?: AngularLoadingOptions): any;
    mount(target: HTMLElement, options?: AngularLoadingOptions): any;
    hide(instance: any): Promise<void>;
}
