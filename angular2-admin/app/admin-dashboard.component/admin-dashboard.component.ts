import {Component, EventEmitter, OnDestroy, OnInit} from "angular2/core";
import {CompetitionsListComponent} from "../competitions-list.component/competitions-list.component";
import {Competition} from "../core/domain/Competition";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'app/admin-dashboard.component/admin-dashboard.component.html',
    styleUrls: ['app/admin-dashboard.component/admin-dashboard.component.css'],
    directives: [
        CompetitionsListComponent
    ]
})
export class AdminDashboardComponent implements OnDestroy, OnInit {

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
