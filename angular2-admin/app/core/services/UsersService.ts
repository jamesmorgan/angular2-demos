import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/share';

import {User} from "../domain/User";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UsersService {

    /** Internal model state */
    private users:User[];

    /** Private Observable **/
    private _usersSource:Subject = new Subject<User[]>();

    /** Public Observer  **/
    usersChanged$ = this._usersSource.asObservable().share(); // share() = This will allow multiple Subscribers to one Observable

    constructor(private _http:Http) {
        // Get the data on creation
        _http.get('http://localhost:8080/users')
            .subscribe(
                data => {
                    this.parseUsers(data.json());
                    this.publishToObservers();
                },
                err => console.error('Failed to load competitions', err),
                () => console.log('Loaded competitions')
            );
    }

    private publishToObservers():void {
        this._usersSource.next(this.users); // Push a new copy to all Subscribers.
    }

    private parseUsers(users:Object[]):void {
        this.users = users.map(function (user) {
            return new User().fromJson(user);
        });
        console.log('Parsed users', this.users);
    }
}