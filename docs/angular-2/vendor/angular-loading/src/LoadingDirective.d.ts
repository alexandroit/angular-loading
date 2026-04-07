import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AngularLoadingEvent, AngularLoadingOptions } from './types';
export declare class LoadingDirective implements AfterViewInit, OnChanges, OnDestroy {
    private static nextHostId;
    visible: boolean;
    loadingOptions: AngularLoadingOptions;
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
    getInstance(): any;
    private ensureController;
    private resolveHostElement;
}
