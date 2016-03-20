import {Component} from 'angular2/core';
import {OnDestroy} from "angular2/core";
import {Input} from "angular2/core";
import {User} from "../core/domain/User";

@Component({
    selector: 'users-list',
    templateUrl: 'app/users-list.component/users-list.component.html',
    styleUrls: ['app/users-list.component/users-list.component.css'],
    directives: [
    ]
})
export class UsersListComponent implements OnDestroy {

    /** Public data */
    @Input() users:User[];

    ngOnDestroy() {

    }
}
