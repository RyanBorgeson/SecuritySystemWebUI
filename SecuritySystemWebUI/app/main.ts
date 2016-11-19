/**
 * Main Security System WebUI application instance.
 * Initializes and sets up entire environment and contains components
 * that handle all actions and events.
 * @Author Ryan Borgeson
 * @Date 11/2/2016
 **/
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_BINDINGS, HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS, HTTP_BINDINGS
]);