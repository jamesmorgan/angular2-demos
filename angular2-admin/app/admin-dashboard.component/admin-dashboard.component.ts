import {Component} from 'angular2/core';
import {CompetitionsListComponent} from "../competitions-list.component/competitions-list.component";
import {Competition} from "../core/domain/Competition";
import {EventEmitter} from "angular2/core";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {OnDestroy} from "angular2/core";

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'app/admin-dashboard.component/admin-dashboard.component.html',
    styleUrls: ['app/admin-dashboard.component/admin-dashboard.component.css'],
    directives: [
        CompetitionsListComponent
    ]
})
export class AdminDashboardComponent implements OnDestroy {

    /** Public data */
    competitions:Competition[];

    /** Subscriber */
    private _subscription:EventEmitter<Competition[]>;

    constructor(private _competitionsService:CompetitionsService) {
        this._subscription =
            this._competitionsService.onCompetitionsChanged.subscribe((competitions) => {
                this.competitions = competitions;
            });
    }

    ngOnDestroy():any {
        return this._subscription.unsubscribe();
    }
}
