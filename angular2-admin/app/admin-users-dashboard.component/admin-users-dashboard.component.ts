import {Component} from 'angular2/core';
import {User} from "../core/domain/User";
import {UsersService} from "../core/services/UsersService";
import {OnDestroy} from "angular2/core";
import {OnInit} from "angular2/core";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'app/admin-users-dashboard.component/admin-users-dashboard.component.html',
    styleUrls: ['app/admin-users-dashboard.component/admin-users-dashboard.component.css'],
    directives: [

    ]
})
export class AdminUsersDashboardComponent implements OnDestroy, OnInit {

    /** Public data */
    users:User[];

    /** Subscriber */
    private _usersSubscription:Subscription;

    constructor(private _usersService:UsersService) {

        this._usersSubscription = this._usersService.usersChanged$.subscribe((users) => {
            this.users = users;
        })
    }

    ngOnInit():any {
        return undefined;
    }

    ngOnDestroy():any {
        // prevent memory leak when component destroyed
        this._usersSubscription.unsubscribe();
    }
}
