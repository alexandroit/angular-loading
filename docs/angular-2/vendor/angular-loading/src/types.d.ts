export type AngularLoadingVariant = 'ring' | 'dual-ring' | 'segmented-ring' | 'arc' | 'orbit' | 'comet' | 'halo' | 'radar' | 'astronaut' | 'astronaut-to-mars' | 'baseball-player' | 'football-player' | 'galaxy' | 'pulse' | 'wave-dots' | 'bouncing-dots' | 'typing-dots' | 'grid-pulse' | 'magnetic-dots' | 'spiral-dots' | 'constellation' | 'equalizer-bars' | 'rising-bars' | 'shimmer' | 'scan-line' | 'liquid-pill' | 'ripple-stack' | 'minimal-spinner' | 'neon-spinner' | 'glass-spinner' | 'vortex' | 'cube' | 'diamond' | 'prism' | 'skeleton-blocks';
export type AngularLoadingDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
export type AngularLoadingAriaLive = 'polite' | 'assertive' | 'off';
export type AngularLoadingStyleValue = string | number | null | undefined;
export interface AngularLoadingStyle {
    [key: string]: AngularLoadingStyleValue;
}
export interface AngularLoadingOptions {
    variant?: AngularLoadingVariant;
    size?: number | string;
    color?: string;
    secondaryColor?: string;
    speed?: number;
    thickness?: number;
    opacity?: number;
    background?: string;
    overlay?: boolean;
    blur?: number;
    radius?: number | string;
    gap?: number;
    count?: number;
    direction?: AngularLoadingDirection;
    label?: string;
    inline?: boolean;
    centered?: boolean;
    fullscreen?: boolean;
    delay?: number;
    minVisible?: number;
    zIndex?: number;
    className?: string;
    style?: AngularLoadingStyle;
    ariaLive?: AngularLoadingAriaLive;
}
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
