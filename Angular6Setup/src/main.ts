import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function getUrlParameter(paramName) {
  paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  const regexS = new RegExp("[\\?&]" + paramName + "=([^&#]*)");
  const results = regexS.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

window["eov_cookie"] = getUrlParameter("cookie");
window["voyageId"] = getUrlParameter("voyageId");
window["legNumber"] = getUrlParameter("legId ");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
