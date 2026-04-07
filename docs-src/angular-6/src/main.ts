import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch((error) => {
  console.error(error);
  var details = [
    'error: ' + String(error),
    error && error.message ? 'message: ' + error.message : '',
    error && error.ngErrorCode ? 'ngErrorCode: ' + error.ngErrorCode : '',
    error && error.code ? 'code: ' + error.code : '',
    error && error.ngTokenPath ? 'ngTokenPath: ' + JSON.stringify(error.ngTokenPath) : '',
    error && error.stack ? '' : '',
    error && error.stack ? error.stack : ''
  ].filter(Boolean).join('\n');
  document.body.innerHTML = '<pre style="padding:16px;white-space:pre-wrap;">' + details.replace(/</g, '&lt;') + '</pre>';
});
