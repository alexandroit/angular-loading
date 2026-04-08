import { Component } from '@angular/core';

import { loaderVariants } from '@stackline/loading';

interface PlaygroundVariant {
  value: string;
  label: string;
}

interface PlaygroundSurface {
  id: string;
  label: string;
  description: string;
}

interface PlaygroundState {
  variant: string;
  size: number;
  speed: number;
  color: string;
  secondaryColor: string;
  overlay: boolean;
  fullscreen: boolean;
  centered: boolean;
  label: string;
  delay: number;
  minVisible: number;
  reducedMotion: boolean;
}

@Component({
  selector: 'playground-panel',
  standalone: false,
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  variants: PlaygroundVariant[] = (loaderVariants || []).map(function (variant: any) {
    return {
      value: variant.value,
      label: variant.label
    };
  });

  surfaces: PlaygroundSurface[] = [
    {
      id: 'default',
      label: 'Default',
      description: 'A clean centered stage for checking size, color, speed, and label choices.'
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      description: 'Keep product cards visible while the active region stays anchored to a loading state.'
    },
    {
      id: 'table',
      label: 'Table',
      description: 'A common analytics refresh pattern where the user should keep their table context.'
    },
    {
      id: 'page',
      label: 'Page',
      description: 'Simulate a route-level or workspace-level loading state inside the docs shell.'
    },
    {
      id: 'modal',
      label: 'Modal',
      description: 'Load only the modal body while keeping the dialog frame stable.'
    },
    {
      id: 'chart',
      label: 'Chart',
      description: 'Useful for analytical surfaces where movement should feel intentional and data-centric.'
    },
    {
      id: 'upload',
      label: 'Upload',
      description: 'A drop zone preview for uploads, media workflows, and file-heavy forms.'
    }
  ];

  activeSurface: string = 'default';
  copyButtonLabel: string = 'Copy code';
  previewVisible: boolean = true;
  state: PlaygroundState = {
    variant: 'orbit',
    size: 60,
    speed: 900,
    color: '#2563eb',
    secondaryColor: '#c7d2fe',
    overlay: false,
    fullscreen: false,
    centered: true,
    label: 'Loading preview',
    delay: 0,
    minVisible: 240,
    reducedMotion: false
  };

  previewOptions: Object = {};
  generatedCode: string = '';

  constructor() {
    this.applyPlaygroundState();
  }

  setSurface(surfaceId: string): void {
    if (this.activeSurface === surfaceId) {
      return;
    }

    this.activeSurface = surfaceId;
    this.applyPlaygroundState();
  }

  applyPlaygroundState(): void {
    this.state.size = Number(this.state.size);
    this.state.speed = Number(this.state.speed);
    this.state.delay = Number(this.state.delay);
    this.state.minVisible = Number(this.state.minVisible);
    this.previewOptions = this.buildPreviewOptions();
    this.generatedCode = this.buildGeneratedCode();
  }

  replayTiming(): void {
    this.previewVisible = false;

    setTimeout(() => {
      this.previewVisible = true;
    }, 40);
  }

  copyCode(): void {
    var textarea = document.createElement('textarea');

    textarea.value = this.generatedCode;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      this.copyButtonLabel = 'Copied';
    } catch (error) {
      this.copyButtonLabel = 'Copy failed';
    }

    document.body.removeChild(textarea);

    setTimeout(() => {
      this.copyButtonLabel = 'Copy code';
    }, 1200);
  }

  getActiveSurfaceDescription(): string {
    var i: number;

    for (i = 0; i < this.surfaces.length; i += 1) {
      if (this.surfaces[i].id === this.activeSurface) {
        return this.surfaces[i].description;
      }
    }

    return '';
  }

  isSurfaceActive(surfaceId: string): boolean {
    return this.activeSurface === surfaceId;
  }

  private buildPreviewOptions(): Object {
    var isSimulatedFullscreen: boolean = this.state.fullscreen;
    var isOverlay: boolean = this.state.overlay || isSimulatedFullscreen;
    var next: any = {
      variant: this.state.variant,
      size: this.state.size,
      speed: this.state.speed,
      color: this.state.color,
      secondaryColor: this.state.secondaryColor,
      centered: isOverlay ? true : this.state.centered,
      delay: this.state.delay,
      minVisible: this.state.minVisible
    };

    if (this.state.label) {
      next.label = this.state.label;
    }

    if (isOverlay) {
      next.overlay = true;
    }

    if (isSimulatedFullscreen) {
      next.background = 'rgba(15, 23, 42, 0.54)';
    }

    return next;
  }

  private buildGeneratedCode(): string {
    var moduleSnippet: string[] = [
      '// app.module.ts',
      "import { BrowserModule } from '@angular/platform-browser';",
      "import { NgModule } from '@angular/core';",
      "import { LoadingModule } from '@stackline/angular-loading';",
      "import { AppComponent } from './app.component';",
      '',
      '@NgModule({',
      '  declarations: [AppComponent],',
      '  imports: [BrowserModule, LoadingModule.forRoot()],',
      '  bootstrap: [AppComponent]',
      '})',
      'export class AppModule {}',
      ''
    ];

    if (this.state.fullscreen) {
      return moduleSnippet.concat(this.buildFullscreenSnippet()).join('\n');
    }

    return moduleSnippet.concat(this.buildTemplateDrivenSnippet()).join('\n');
  }

  private escapeSingleQuotes(value: string): string {
    return String(value).split("'").join("\\'");
  }

  private buildTemplateDrivenSnippet(): string[] {
    return [
      '// app.component.ts',
      "import { Component } from '@angular/core';",
      '',
      '@Component({',
      "  selector: 'app-root',",
      "  templateUrl: './app.component.html'",
      '})',
      'export class AppComponent {',
      '  isLoading = true;',
      '  loadingOptions = ' + this.buildOptionsObjectLiteral(2) + ';',
      '}',
      '',
      '// app.component.html',
      this.buildTemplateSnippet()
    ];
  }

  private buildFullscreenSnippet(): string[] {
    return [
      '// app.component.ts',
      "import { Component } from '@angular/core';",
      "import { LoadingService } from '@stackline/angular-loading';",
      '',
      '@Component({',
      "  selector: 'app-root',",
      "  template: '<button (click)=\"showLoader()\">Show fullscreen loader</button>'",
      '})',
      'export class AppComponent {',
      '  private fullscreenLoader: any;',
      '',
      '  constructor(private loadingService: LoadingService) {}',
      '',
      '  showLoader(): void {',
      '    this.fullscreenLoader = this.loadingService.create(document.body, ' + this.buildOptionsObjectLiteral(4) + ');',
      '    this.fullscreenLoader.show();',
      '  }',
      '}'
    ];
  }

  private buildTemplateSnippet(): string {
    if (this.activeSurface === 'default' && !this.state.overlay) {
      return [
        '<revive-loading',
        '  [visible]="isLoading"',
        '  [options]="loadingOptions">',
        '</revive-loading>'
      ].join('\n');
    }

    if (this.activeSurface === 'modal') {
      return [
        '<div class="modal-shell">',
        '  <div class="modal-header"></div>',
        '  <div class="modal-body"',
        '       [reviveLoading]="isLoading"',
        '       [loadingOptions]="loadingOptions">',
        '    <div class="modal-line"></div>',
        '    <div class="modal-line short"></div>',
        '    <div class="modal-line"></div>',
        '  </div>',
        '</div>'
      ].join('\n');
    }

    if (this.activeSurface === 'table') {
      return [
        '<div class="table-shell"',
        '     [reviveLoading]="isLoading"',
        '     [loadingOptions]="loadingOptions">',
        '  <div class="table-head">',
        '    <span>Status</span>',
        '    <span>Customer</span>',
        '    <span>Plan</span>',
        '    <span>MRR</span>',
        '  </div>',
        '  <div class="table-row">...</div>',
        '  <div class="table-row">...</div>',
        '</div>'
      ].join('\n');
    }

    if (this.activeSurface === 'chart') {
      return [
        '<div class="chart-panel"',
        '     [reviveLoading]="isLoading"',
        '     [loadingOptions]="loadingOptions">',
        '  <div class="chart-bar"></div>',
        '  <div class="chart-bar"></div>',
        '  <div class="chart-bar"></div>',
        '</div>'
      ].join('\n');
    }

    if (this.activeSurface === 'upload') {
      return [
        '<div class="upload-zone"',
        '     [reviveLoading]="isLoading"',
        '     [loadingOptions]="loadingOptions">',
        '  <div class="upload-icon"></div>',
        '  <p>Drop files here</p>',
        '</div>'
      ].join('\n');
    }

    if (this.activeSurface === 'page') {
      return [
        '<section class="page-shell"',
        '         [reviveLoading]="isLoading"',
        '         [loadingOptions]="loadingOptions">',
        '  <header class="page-topbar"></header>',
        '  <div class="page-grid">...</div>',
        '</section>'
      ].join('\n');
    }

    return [
      '<section class="dashboard-cards"',
      '         [reviveLoading]="isLoading"',
      '         [loadingOptions]="loadingOptions">',
      '  <div class="card"></div>',
      '  <div class="card"></div>',
      '  <div class="card card-wide"></div>',
      '</section>'
    ].join('\n');
  }

  private buildOptionsObjectLiteral(indentLevel: number): string {
    var indent: string = this.repeat(' ', indentLevel);
    var innerIndent: string = this.repeat(' ', indentLevel + 2);
    var lines: string[] = [
      '{',
      innerIndent + "variant: '" + this.state.variant + "',",
      innerIndent + 'size: ' + this.state.size + ',',
      innerIndent + 'speed: ' + this.state.speed + ',',
      innerIndent + "color: '" + this.state.color + "',",
      innerIndent + "secondaryColor: '" + this.state.secondaryColor + "',"
    ];

    if (this.state.overlay || this.state.fullscreen) {
      lines.push(innerIndent + 'overlay: true,');
    }

    if (this.state.fullscreen) {
      lines.push(innerIndent + 'fullscreen: true,');
      lines.push(innerIndent + "background: 'rgba(15, 23, 42, 0.54)',");
    }

    if (this.state.centered && !this.state.fullscreen) {
      lines.push(innerIndent + 'centered: true,');
    }

    lines.push(innerIndent + "label: '" + this.escapeSingleQuotes(this.state.label) + "',");

    if (this.state.delay > 0) {
      lines.push(innerIndent + 'delay: ' + this.state.delay + ',');
    }

    if (this.state.minVisible !== 240) {
      lines.push(innerIndent + 'minVisible: ' + this.state.minVisible + ',');
    }

    lines.push(indent + '}');

    return lines.join('\n');
  }

  private repeat(value: string, count: number): string {
    var output: string = '';
    var i: number;

    for (i = 0; i < count; i += 1) {
      output += value;
    }

    return output;
  }
}
