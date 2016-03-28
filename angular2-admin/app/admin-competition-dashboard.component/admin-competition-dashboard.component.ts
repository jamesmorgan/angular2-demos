import {Component, OnDestroy, OnInit, ChangeDetectionStrategy} from "angular2/core";
import {CompetitionsListComponent} from "../competitions-list.component/competitions-list.component";
import {Competition} from "../core/domain/Competition";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Subscription} from "rxjs/Subscription";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'app/admin-competition-dashboard.component/admin-competition-dashboard.component.html',
    styleUrls: ['app/admin-competition-dashboard.component/admin-competition-dashboard.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        CompetitionsListComponent
    ],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AdminCompetitionDashboardComponent implements OnDestroy, OnInit {

    /** Public data */
    competitions:Competition[];

    private _competitionsSubscription:Subscription;

    constructor(private _competitionsService:CompetitionsService) {
        // Subscribe an changes which may happen
        this._competitionsSubscription = this._competitionsService.competitionsChanged$.subscribe((competitions) => {
            this.competitions = competitions;
        });
    }

    ngOnInit():any {
        return undefined;
    }

    ngOnDestroy():any {
        this._competitionsSubscription.unsubscribe(); // prevent memory leak when component destroyed
    }
}
