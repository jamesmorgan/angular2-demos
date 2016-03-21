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
    selectionsChanged$ = this._selectionsSource.asObservable().share(); // share() = This will allow multiple Subscribers to one Observable

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
        console.log('Parsed selections', this.selections);
    }
}