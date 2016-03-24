import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {GameApi} from "../api/GameApi";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import "rxjs/Rx";

@Injectable()
export class GamesService {

    /** Internal model state */
    private games:Object[];

    /** Private Observable **/
    private _gamesSource:Subject<Object[]> = new Subject<Object[]>();

    /** Public Observer  **/
    gamesChanged$:Observable<Object[]> =
        this._gamesSource.asObservable()
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

    constructor(private _gameApi:GameApi) {
        this._gameApi.load()
            .subscribe(
                data => {
                    this.games = data;
                    this.publishToObservers();
                },
                err => console.error('Failed to load games', err),
                () => console.log('Loaded games', this.games)
            );
    }

    private publishToObservers():void {
        this._gamesSource.next(this.games);
    }

}