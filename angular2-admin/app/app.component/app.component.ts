import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {AdminUsersDashboardComponent} from "../admin-users-dashboard.component/admin-users-dashboard.component";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {UsersService} from "../core/services/UsersService";
import {CompetitionApi} from "../core/api/CompetitionApi";
import {SelectionsService} from "../core/services/SelectionsService";
import {AdminCompetitionDashboardComponent} from "../admin-competition-dashboard.component/admin-competition-dashboard.component";
import {CompetitionEditComponent} from "../competition-edit.component/competition-edit.component";
import {CompetitionAddFormComponent} from "../competition-add-form.component/competition-add-form.component";
import {GamesService} from "../core/services/GameService";
import {GameApi} from "../core/api/GameApi";
import {SelectionApi} from "../core/api/SelectionApi";
import {UserApi} from "../core/api/UserApi";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CompetitionsService, CompetitionApi,
        UsersService, UserApi,
        SelectionsService, SelectionApi,
        GamesService, GameApi
    ],
})
@RouteConfig([
    {path: '/admin/competition', name: 'AdminCompetitionDashboard', component: AdminCompetitionDashboardComponent, useAsDefault: true},
    {path: '/admin/competition/add', name: 'AdminCompetitionAdd', component: CompetitionAddFormComponent},
    {path: '/admin/competition/edit/:competitionId', name: 'AdminCompetitionEdit', component: CompetitionEditComponent},
    {path: '/admin/users', name: 'AdminUsersDashboard', component: AdminUsersDashboardComponent}
])
export class AppComponent {
}