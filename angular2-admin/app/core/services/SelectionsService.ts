import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/share';

import {Selection} from "../domain/Selection";
import {Subject} from "rxjs/Subject";

@Injectable()
export class SelectionsService {

    /** Internal model state */
    private selections:Selection[];

    /** Private Observable **/
    private _selectionsSource:Subject = new Subject<Selection[]>();

    /** Public Observer  **/
    selectionsChanged$ = this._selectionsSource.asObservable()
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
        _http.get('http://localhost:8080/selections')
            .subscribe(
                data => {
                    this.parseSelections(data.json());
                    this.publishToObservers();
                },
                err => console.error('Failed to load selections', err),
                () => console.log('Loaded selections')
            );
    }

    private publishToObservers():void {
        this._selectionsSource.next(this.selections); // Push a new copy to all Subscribers.
    }

    private parseSelections(selections:Object[]):void {
        this.selections = selections.map(function (selection) {
            return new Selection().fromJson(selection);
        });
        // console.log('Parsed selections', this.selections);
    }
}