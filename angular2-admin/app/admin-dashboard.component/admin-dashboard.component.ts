import {Component} from 'angular2/core';
import {CompetitionsListComponent} from "../competitions-list.component/competitions-list.component";

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'app/admin-dashboard.component/admin-dashboard.component.html',
    styleUrls: ['app/admin-dashboard.component/admin-dashboard.component.css'],
    directives: [
        CompetitionsListComponent
    ]
})
export class AdminDashboardComponent {

}
