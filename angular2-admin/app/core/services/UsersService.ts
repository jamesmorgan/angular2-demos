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
    private _usersSource:Subject<User[]> = new Subject<User[]>();

    /** Public Observer  **/
    usersChanged$ = this._usersSource.asObservable()
        /**
         * publishReplay() = Changes return type fo ConnectableObservable see: http://reactivex.io/documentation/operators/replay.html
         * The Observable will always emit the same complete sequence to any future observers,
         * even those observers that subscribe after the connectable Observable has begun to emit items to other subscribed observers.
         */
        .publishReplay()
        /**
         * refCount() = turns ConnectableObservable and returns an ordinary Observable see: http://reactivex.io/documentation/operators/refcount.html
         * Joining & disconnecting the underlying the ConnectableObservable to the Connectable.
         * RefCount then keeps track of how many other observers subscribe to it and does not disconnect from the underlying connectable Observable until the last observer has done so.
         */
        .refCount()
        /**
         * share() = This will allow multiple Subscribers to one Observable
         */
        .share();

    constructor(private _http:Http) {
        // Get the data on creation
        _http.get('http://localhost:8080/users')
            .subscribe(
                data => {
                    this.parseUsers(data.json());
                    this.publishToObservers();
                },
                err => console.error('Failed to load users', err),
                () => console.log('Loaded users')
            );
    }

    private publishToObservers():void {
        this._usersSource.next(this.users); // Push a new copy to all Subscribers.
    }

    private parseUsers(users:Object[]):void {
        this.users = users.map(function (user) {
            return new User().fromJson(user);
        });
        // console.log('Parsed users', this.users);
    }
}