import {Injectable, EventEmitter} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from 'rxjs/Observable';
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';

import {Competition} from "../domain/Competition";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CompetitionsService {

    /** Internal model state */
    private competitions:Competition[];

    /** Public Publisher */
    onCompetitionsChanged = new EventEmitter<Competition[]>();

    /** Private Observable sources **/
    private _competitionsSource:Subject = new Subject<Competition[]>();

    /** Public observer  **/
    competitionsChanged$ = this._competitionsSource.asObservable().share(); // share() = This will allow multiple Subscribers to one Observable

    constructor(http:Http) {

        // Get the data on creation
        http.get('http://localhost:8080/competitions')
            .subscribe(
                data => {
                    this.parseCompetitions(data.json());
                    this.triggerCompetitionsChanged();
                    this.publishAtObservables();
                },
                err => console.error('Failed to load competitions', err),
                () => console.log('Loaded competitions')
            );
    }

    private publishAtObservables():void {
        this._competitionsSource.next(this.competitions); // Push a new copy to all Subscribers.
    }

    private triggerCompetitionsChanged():void {
        this.onCompetitionsChanged.emit(this.competitions);
    }

    private parseCompetitions(competitions:Object[]):void {
        this.competitions = competitions.map(function (competition) {
            return new Competition().fromJson(competition);
        });
        console.log('Parsed competitions', this.competitions);
    }
}