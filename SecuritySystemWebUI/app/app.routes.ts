/**
 * App Routes
 * Application component structure and routing.
 * @Author Ryan Borgeson
 **/
import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './components/Dashboard.component';

const routes: RouterConfig = [
    {
        path: '', component: DashboardComponent
    },
    { path: 'dashboard', component: DashboardComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
