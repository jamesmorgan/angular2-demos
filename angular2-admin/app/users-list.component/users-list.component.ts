import {Component, OnDestroy, Input, ChangeDetectionStrategy} from "angular2/core";
import {User} from "../core/domain/User";

@Component({
    selector: 'users-list',
    templateUrl: 'app/users-list.component/users-list.component.html',
    styleUrls: ['app/users-list.component/users-list.component.css'],
    directives: [],
    changeDetection: ChangeDetectionStrategy.Default
})
export class UsersListComponent implements OnDestroy {

    /** Public data */
    @Input() users:User[];

    ngOnDestroy() {

    }
}
