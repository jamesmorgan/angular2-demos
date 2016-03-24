import {Injectable} from "angular2/core";
import {Selection} from "../domain/Selection";
import {Subject} from "rxjs/Subject";
import {SelectionApi} from "../api/SelectionApi";
import "rxjs/add/operator/share";

@Injectable()
export class SelectionsService {

    /** Internal model state */
    private selections:Selection[];

    /** Private Observable **/
    private _selectionsSource:Subject<Selection[]> = new Subject<Selection[]>();

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

    constructor(private _selectionApi:SelectionApi) {
        this._selectionApi.load()
            .subscribe(
                data => {
                    this.selections = data;
                    this.publishToObservers();
                },
                err => console.error('Failed to load selections', err),
                () => console.log('Loaded selections', this.selections)
            );
    }

    private publishToObservers():void {
        this._selectionsSource.next(this.selections); // Push a new copy to all Subscribers.
    }

}