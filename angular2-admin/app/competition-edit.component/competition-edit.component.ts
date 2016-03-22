import {Component, OnInit, OnDestroy} from "angular2/core";
import {RouteParams} from "angular2/router";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {ID} from "../core/domain/ID";
import {Competition} from "../core/domain/Competition";
import {Selection} from "../core/domain/Selection";
import {SelectionsListComponent} from "../selections-list.component/selections-list.component";
import {SelectionsService} from "../core/services/SelectionsService";
import {Subscription} from "rxjs/Subscription";

// TODO there seems to be no true alternatives of document way of route resolves?
/**
 * Then there is @CanActivate.
 * This is a special hook because it is called before your component is instantiated.
 * Its parameters are (next, previous) which are the components you're routing to and the component
 * you've come from (or null if you have no history) respectively.
 */
// @CanActivate(
//     (next) => {
//         var competitionId = this._routeParams.get('competitionId');
//         return this._competitionsService.findCompetition(new ID(competitionId))
//             .toPromise((message:Competition) => {
//                 return true; //truthy lets route continue, false stops routing
//             })
//     }
// )
@Component({
    selector: 'competition-edit',
    templateUrl: 'app/competition-edit.component/competition-edit.component.html',
    styleUrls: ['app/competition-edit.component/competition-edit.component.css'],
    directives: [
        SelectionsListComponent
    ]
})
export class CompetitionEditComponent implements OnInit, OnDestroy {

    /** Public data */
    selections:Selection[];

    competition:Competition;

    private _selectionsSubscription:Subscription;

    constructor(private _routeParams:RouteParams,
                private _competitionsService:CompetitionsService,
                private _selectionsService:SelectionsService) {
        // Subscribe an changes which may happen
        this._selectionsSubscription = this._selectionsService.selectionsChanged$.subscribe((selections) => {
            this.selections = selections;
        });
    }

    ngOnInit():any {
        var competitionId:string = this._routeParams.get('competitionId');
        console.log('Calling OnInit CompetitionEditComponent with competitionId: ' + competitionId);
        this._competitionsService.findCompetition(new ID(competitionId))
            .subscribe(
                (data) => this.competition = new Competition().fromJson(data),
                (err) => console.error(err)
            );
    }

    ngOnDestroy():any {
        this._selectionsSubscription.unsubscribe(); // prevent memory leak when component destroyed
    }
}
