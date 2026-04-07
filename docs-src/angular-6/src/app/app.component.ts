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
    this.log('Angular 6 docs loaded successfully.');
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

  private log(message: string): void {
    var timestamp = new Date().toLocaleTimeString();
    this.logs.unshift('[' + timestamp + '] ' + message);
    this.logs = this.logs.slice(0, 12);
  }
}
