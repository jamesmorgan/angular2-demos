import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {AdminDashboardComponent} from "../admin-dashboard.component/admin-dashboard.component";
import {AdminUsersDashboardComponent} from "../admin-users-dashboard.component/admin-users-dashboard.component";

import {CompetitionsService} from "../core/services/CompetitionsService";
import {UsersService} from "../core/services/UsersService";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CompetitionsService,
        UsersService
    ],
})
@RouteConfig([
    {
        path: '/admin', name: 'AdminDashboard', component: AdminDashboardComponent,
        useAsDefault: true
    },
    {
        path: '/admin/users', name: 'AdminUsersDashboard', component: AdminUsersDashboardComponent
    }
])
export class AppComponent {
}