import { Component } from '@angular/core';

import { LoadingService } from '@revivejs/angular-loading';
import { API_CARDS } from './data/api';
import { RELEASE_LINE } from './data/release-line';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiCards = API_CARDS;
  releaseLine = RELEASE_LINE;
  releaseLinks: Array<{ label: string; href: string; docsPath: string }> = [
    { label: 'Angular 2', href: '../angular-2/', docsPath: '/angular-2/' },
    { label: 'Angular 4', href: '../angular-4/', docsPath: '/angular-4/' },
    { label: 'Angular 5', href: '../angular-5/', docsPath: '/angular-5/' },
    { label: 'Angular 6', href: '../angular-6/', docsPath: '/angular-6/' },
    { label: 'Angular 7', href: '../angular-7/', docsPath: '/angular-7/' },
    { label: 'Angular 8', href: '../angular-8/', docsPath: '/angular-8/' },
    { label: 'Angular 9', href: '../angular-9/', docsPath: '/angular-9/' },
    { label: 'Angular 10', href: '../angular-10/', docsPath: '/angular-10/' },
    { label: 'Angular 11', href: '../angular-11/', docsPath: '/angular-11/' },
    { label: 'Angular 12', href: '../angular-12/', docsPath: '/angular-12/' },
    { label: 'Angular 13', href: '../angular-13/', docsPath: '/angular-13/' },
    { label: 'Angular 14', href: '../angular-14/', docsPath: '/angular-14/' },
    { label: 'Angular 15', href: '../angular-15/', docsPath: '/angular-15/' },
    { label: 'Angular 16', href: '../angular-16/', docsPath: '/angular-16/' },
    { label: 'Angular 17', href: '../angular-17/', docsPath: '/angular-17/' },
    { label: 'Angular 18', href: '../angular-18/', docsPath: '/angular-18/' },
    { label: 'Angular 19', href: '../angular-19/', docsPath: '/angular-19/' },
    { label: 'Angular 20', href: '../angular-20/', docsPath: '/angular-20/' },
    { label: 'Angular 21', href: '../angular-21/', docsPath: '/angular-21/' }
  ];
  logs: string[] = [];
  installSnippet: string = "npm install @revivejs/angular-loading";
  moduleSnippet: string = "import { LoadingModule } from '@revivejs/angular-loading';\n\n@NgModule({\n  imports: [LoadingModule.forRoot()]\n})";
  directiveSnippet: string = "<div [reviveLoading]=\"isLoading\"\n     [loadingOptions]=\"{ overlay: true }\">\n  ...\n</div>";
  componentSnippet: string = "<revive-loading\n  [visible]=\"true\"\n  [options]=\"basicOptions\">\n</revive-loading>";
  serviceSnippet: string = "this.fullscreenLoader = this.loadingService.create(document.body, {\n  fullscreen: true,\n  centered: true,\n  variant: 'galaxy'\n});\n\nthis.fullscreenLoader.show();";

  basicOptions: Object = {
    variant: 'orbit',
    size: 56,
    color: '#2563eb',
    secondaryColor: 'rgba(37, 99, 235, 0.18)',
    centered: true,
    label: 'Loading preview'
  };

  overlayVisible: boolean = true;
  overlayOptions: Object = {
    variant: 'glass-spinner',
    overlay: true,
    centered: true,
    label: 'Loading sales card',
    delay: 120,
    minVisible: 320
  };

  buttonLoading: boolean = false;
  buttonOptions: Object = {
    inline: true,
    centered: true,
    size: 18,
    label: '',
    variant: 'typing-dots',
    color: '#ffffff',
    secondaryColor: 'rgba(255, 255, 255, 0.28)'
  };

  tableVisible: boolean = false;
  tableOptions: Object = {
    variant: 'scan-line',
    overlay: true,
    centered: true,
    label: 'Refreshing table',
    background: 'rgba(255, 255, 255, 0.76)'
  };

  private fullscreenLoader: any = null;

  constructor(private loadingService: LoadingService) {
    this.log('Angular 15 docs loaded successfully.');
  }

  onCreate(label: string): void {
    this.log(label + ' created.');
  }

  onShown(label: string): void {
    this.log(label + ' shown.');
  }

  onHidden(label: string): void {
    this.log(label + ' hidden.');
  }

  onDestroyed(label: string): void {
    this.log(label + ' destroyed.');
  }

  toggleOverlay(): void {
    this.overlayVisible = !this.overlayVisible;
    this.log('Card overlay toggled to ' + (this.overlayVisible ? 'visible' : 'hidden') + '.');
  }

  triggerButton(): void {
    if (this.buttonLoading) {
      return;
    }

    this.buttonLoading = true;
    this.log('Simulating button submit...');

    setTimeout(() => {
      this.buttonLoading = false;
      this.log('Button submit finished.');
    }, 1600);
  }

  refreshTable(): void {
    if (this.tableVisible) {
      return;
    }

    this.tableVisible = true;
    this.log('Table refresh started.');

    setTimeout(() => {
      this.tableVisible = false;
      this.log('Table refresh finished.');
    }, 1800);
  }

  showFullscreen(): void {
    if (!this.fullscreenLoader) {
      this.fullscreenLoader = this.loadingService.create(document.body, {
        fullscreen: true,
        centered: true,
        variant: 'galaxy',
        size: 60,
        label: 'Loading application shell'
      });
      this.log('Fullscreen loader created.');
    }

    this.fullscreenLoader.show();
    this.log('Fullscreen loader shown.');

    setTimeout(() => {
      if (this.fullscreenLoader) {
        this.fullscreenLoader.hide();
        this.log('Fullscreen loader hidden.');
      }
    }, 1700);
  }

  clearLog(): void {
    this.logs = [];
    this.log('Log cleared.');
  }

  isCurrentRelease(docsPath: string): boolean {
    return docsPath === this.releaseLine.docsPath;
  }

  private log(message: string): void {
    var timestamp = new Date().toLocaleTimeString();
    this.logs.unshift('[' + timestamp + '] ' + message);
    this.logs = this.logs.slice(0, 12);
  }
}
