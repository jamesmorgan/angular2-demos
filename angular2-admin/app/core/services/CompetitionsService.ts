import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Competition} from "../domain/Competition";
import {Subject} from "rxjs/Subject";
import {Status} from "../domain/Status";
import {ID} from "../domain/ID";
import {CompetitionApi} from "../api/CompetitionApi";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import "rxjs/Rx";

@Injectable()
export class CompetitionsService {

    /** Internal model state */
    private competitions:Competition[];

    /** Private Observable **/
    private _competitionsSource:Subject<Competition[]> = new Subject<Competition[]>();

    /** Public Observer  **/
    competitionsChanged$:Observable<Competition[]> =
        this._competitionsSource.asObservable()
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

    constructor(private _competitionApi:CompetitionApi) {
        this._competitionApi.load()
            .subscribe(
                data => {
                    this.competitions = data;
                    this.publishToObservers();
                },
                err => console.error('Failed to load competitions', err),
                () => console.log('Loaded competitions', this.competitions)
            );
    }

    private publishToObservers():void {
        this._competitionsSource.next(this.competitions); // Push a new copy to all Subscribers.
    }

    public findCompetition(compId:ID):Observable<Competition> {
        return this._competitionApi.findCompetition(compId);
    }

    public createCompetition(comp:Competition) {
        return this._competitionApi.create(comp);
    }

    public updateStatus(compId:ID, status:Status):void {
        // FIXME this wont work if the users has not already populate the this.competitions list
        var compIdx = this.competitions.findIndex((comp:Competition) => {
            return comp._id.value === compId.value;
        });

        if (compIdx >= 0) {
            this._competitionApi.updateStatus(compId, status)
                .subscribe(
                    res => {
                        console.info('Successfully updated status', res);
                        this.competitions[compIdx].status = status;
                        this.publishToObservers();
                    },
                    err => console.error('Failed to update status', err)
                );
        }
    }
}