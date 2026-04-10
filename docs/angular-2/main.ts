import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch(function (error: any) {
  console.error(error);
  document.body.innerHTML = '<pre style="padding:16px;white-space:pre-wrap;">' + String(error) + '</pre>';
});
