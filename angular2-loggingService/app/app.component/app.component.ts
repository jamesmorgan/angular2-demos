import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {LoggingDashboardComponent} from '../logging-dashboard.component/logging-dashboard.component';
import {AboutMeComponent} from "../about-me.component/about-me.component";
import {LogService} from "../log.service";
import {Config} from "../Config";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        Config,
        LogService
    ]
})
@RouteConfig([
    {
        path: '/logging', name: 'LoggingDashboard', component: LoggingDashboardComponent,
        useAsDefault: true
    },
    {
        path: '/about', name: 'About', component: AboutMeComponent
    }
])
export class AppComponent {

}