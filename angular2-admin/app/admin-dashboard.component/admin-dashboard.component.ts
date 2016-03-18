import {Component} from 'angular2/core';
import {CompetitionsListComponent} from "../competitions-list.component/competitions-list.component";
import {Competition} from "../core/domain/Competition";
import {User} from "../core/domain/User";
import {EventEmitter} from "angular2/core";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {UsersService} from "../core/services/UsersService";
import {OnDestroy} from "angular2/core";
import {OnInit} from "angular2/core";
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

    /** Public data */
    competitionsObservable:Competition[];
    users:User[];

    /** Subscriber */
    private _competitionsEventHandler:EventEmitter<Competition[]>;

    private _competitionsSubscription:Subscription;
    private _usersSubscription:Subscription;

    constructor(private _competitionsService:CompetitionsService, private _usersService:UsersService) {

        // Get a handle on the event emitter to react on the changes
        this._competitionsEventHandler = this._competitionsService.onCompetitionsChanged.subscribe((competitions) => {
            this.competitions = competitions;
        });

        // Subscribe an changes which may happen
        this._competitionsSubscription = this._competitionsService.competitionsChanged$.subscribe((competitions) => {
            this.competitionsObservable = competitions;
        })

        this._usersSubscription = this._usersService.usersChanged$.subscribe((users) => {
            this.users = users;
        })
    }

    ngOnInit():any {
        return undefined;
    }

    ngOnDestroy():any {
        // prevent memory leak when component destroyed
        this._competitionsSubscription.unsubscribe();
        this._usersSubscription.unsubscribe();

        return this._competitionsEventHandler.unsubscribe();
    }
}
