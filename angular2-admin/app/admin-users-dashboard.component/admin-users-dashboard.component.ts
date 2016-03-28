import {Component, OnDestroy, ChangeDetectionStrategy, OnInit} from "angular2/core";
import {User} from "../core/domain/User";
import {UsersService} from "../core/services/UsersService";
import {Subscription} from "rxjs/Subscription";
import {UsersListComponent} from "../users-list.component/users-list.component";

@Component({
    selector: 'admin-users-dashboard',
    templateUrl: 'app/admin-users-dashboard.component/admin-users-dashboard.component.html',
    styleUrls: ['app/admin-users-dashboard.component/admin-users-dashboard.component.css'],
    directives: [
        UsersListComponent
    ],
    /**
     * ChangeDetectionStrategy.Default:
     * We want change detection to happen at all times when application state changes.
     * If we use OnPush on this component i.e. the top of the component tree, the problem would be because the component subscribes to a stream in its constructor.
     * This is application state change and we want to have this reflected in our views & children so we use Default at the top of the tree.
     *
     * ChangeDetectionStrategy.OnPush for child components:
     * Change detection isn’t performed all the time, only when the component’s input properties change.
     * i.e. when this component changes it trickles down the tree to its children.
     */
    changeDetection: ChangeDetectionStrategy.Default
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
