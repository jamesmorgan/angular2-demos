import {Injectable, EventEmitter} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Competition} from "../domain/Competition";
import {Subject} from "rxjs/Subject";
import {Status} from "../domain/Status";
import {ID} from "../domain/ID";
import {CompetitionApi} from "../api/CompetitionApi";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable()
export class CompetitionsService {

    /** Internal model state */
    private competitions:Competition[];

    /** Public Publisher
     *  @deprecated */
    onCompetitionsChanged = new EventEmitter<Competition[]>(true);

    /** Private Observable **/
    private _competitionsSource:Subject<Competition[]> = new Subject<Competition[]>();

    /** Public Observer  **/
    competitionsChanged$:Observable<Competition[]> = this._competitionsSource.asObservable().share(); // share() = This will allow multiple Subscribers to one Observable

    constructor(private _competitionApi:CompetitionApi) {
        this._competitionApi.load()
            .subscribe(
                data => {
                    this.competitions = data;
                    this.triggerCompetitionsChanged();
                    this.publishToObservers();
                },
                err => console.error('Failed to load competitions', err),
                () => console.log('Loaded competitions')
            );
    }

    private publishToObservers():void {
        this._competitionsSource.next(this.competitions); // Push a new copy to all Subscribers.
    }

    /** @deprecated */
    private triggerCompetitionsChanged():void {
        this.onCompetitionsChanged.emit(this.competitions);
    }

    public findCompetition(compId:ID):Observable<Competition> {
        return this._competitionApi.findCompetition(compId);
    }

    public updateStatus(compId:ID, status:Status):void {
        var compIdx = this.competitions.findIndex((comp:Competition) => {
            return comp._id == compId;
        });

        if (compId) {
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