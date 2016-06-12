import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Competition} from "../domain/Competition";
import {Subject} from "rxjs/Subject";
import {Status} from "../domain/Status";
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

    public findCompetition(compId:String):Observable<Competition> {
        return this._competitionApi.findCompetition(compId);
    }

    public createCompetition(comp:Competition) {
        return this._competitionApi.create(comp);
    }

    public addSelectionToCompetition(compId:String, selection:Selection) {
        // FIXME this won't work if the users has not already populate the this.competitions list
        var compIdx = this.competitions.findIndex((comp:Competition) => {
            return comp._id === compId;
        });

        if (compIdx >= 0) {
            return this._competitionApi.saveSelectionForComp(compId, selection)
                .subscribe(
                    res => {
                        console.info('Successfully added selection', res);
                        this.competitions[compIdx].selections.push(selection);
                        this.publishToObservers();
                    },
                    err => console.error('Failed to update status', err)
                );
        }
    }

    public updateStatus(compId:String, status:Status):void {
        // FIXME this won't work if the users has not already populate the this.competitions list
        var compIdx = this.competitions.findIndex((comp:Competition) => {
            return comp._id === compId;
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

    public updateSelectionScore(compId:String, selectionId:String, newScore):void {
        // FIXME this won't work if the users has not already populate the this.competitions list
        var compIdx = this.competitions.findIndex((comp:Competition) => {
            return comp._id === compId;
        });

        if (compIdx >= 0) {
            this._competitionApi.updateScore(compId, selectionId, newScore)
                .subscribe(
                    res => {
                        console.info('Successfully updated score', res);

                        this.competitions[compIdx].selections.find((selection:Selection) => {
                            if (selection._id == selectionId) {
                                selection.score = newScore
                            }
                        });
                        
                        this.publishToObservers();
                    },
                    err => console.error('Failed to update selection score', err)
                );
        }
    }
}