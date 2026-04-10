import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AngularLoadingEvent, AngularLoadingOptions } from './types';
export declare class LoadingComponent implements AfterViewInit, OnChanges, OnDestroy {
    private static nextHostId;
    options: AngularLoadingOptions;
    visible: boolean;
    create: EventEmitter<AngularLoadingEvent>;
    shown: EventEmitter<AngularLoadingEvent>;
    hidden: EventEmitter<AngularLoadingEvent>;
    updated: EventEmitter<AngularLoadingEvent>;
    destroyed: EventEmitter<AngularLoadingEvent>;
    hostId: string;
    private controller;
    private initialized;
    private hooks;
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    getInstance(): any;
    private resolveVisible;
    private ensureController;
    private resolveHostElement;
}
