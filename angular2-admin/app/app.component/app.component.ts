import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {AdminUsersDashboardComponent} from "../admin-users-dashboard.component/admin-users-dashboard.component";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {UsersService} from "../core/services/UsersService";
import {CompetitionApi} from "../core/api/CompetitionApi";
import {SelectionsService} from "../core/services/SelectionsService";
import {AdminCompetitionDashboardComponent} from "../admin-competition-dashboard.component/admin-competition-dashboard.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CompetitionsService,
        UsersService,
        SelectionsService,
        CompetitionApi
    ],
})
@RouteConfig([
    {
        path: '/admin/competition', name: 'AdminCompetitionDashboard', component: AdminCompetitionDashboardComponent,
        useAsDefault: true
    },
    {
        path: '/admin/users', name: 'AdminUsersDashboard', component: AdminUsersDashboardComponent
    }
])
export class AppComponent {
}