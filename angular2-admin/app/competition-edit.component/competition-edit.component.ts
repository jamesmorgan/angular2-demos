import {Component, OnInit, OnDestroy} from "angular2/core";
import {RouteParams, CanActivate, OnActivate, ComponentInstruction, Router} from "angular2/router";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {Selection} from "../core/domain/Selection";
import {SelectionsListComponent} from "../selections-list.component/selections-list.component";
import {SelectionsService} from "../core/services/SelectionsService";
import {Subscription} from "rxjs/Subscription";
import {CompetitionStatusComponent} from "../competition-status.component/competition-status.component";
import {SelectionAddComponent} from "../selection-add.component/selection-add.component";


// TODO there seems to be no true alternatives of document way of route resolves?
/**
 * Then there is @CanActivate.
 * This is a special hook because it is called before your component is instantiated.
 * Its parameters are (next, previous) which are the components you're routing to and the component
 * you've come from (or null if you have no history) respectively.
 */
@CanActivate(
    (next, prev) => {
        console.log('@CanActivate() -> next', next);
        console.log('@CanActivate() -> prev', prev);
        // TODO this would be good for auth -> could always expose a /auth/check API or check some web token?
        return true;
    }
)
@Component({
    selector: 'competition-edit',
    templateUrl: 'app/competition-edit.component/competition-edit.component.html',
    styleUrls: ['app/competition-edit.component/competition-edit.component.css'],
    directives: [
        SelectionsListComponent,
        CompetitionStatusComponent,
        SelectionAddComponent
    ]
})
export class CompetitionEditComponent implements OnInit, OnActivate, OnDestroy {

    /** Public data */
    competition:Competition;
    selections:Selection[];
    newSelection:Selection;

    private _selectionsSubscription:Subscription;

    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _competitionsService:CompetitionsService,
                private _selectionsService:SelectionsService) {
        // Subscribe an changes which may happen
        this._selectionsSubscription = this._selectionsService.selectionsChanged$.subscribe((selections) => {
            this.selections = selections;
        });
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        console.log('routerOnActivate() -> nextInstruction', nextInstruction);
        console.log('routerOnActivate() -> prevInstruction', prevInstruction);
    }

    deleteCompetition(competition) {
        this._competitionsService.deleteCompetition(competition._id)
            .subscribe(() => {
                this._router.navigate(['AdminCompetitionDashboard']);
            })
    }

    ngOnInit():any {
        var competitionId:string = this._routeParams.get('competitionId');
        this._competitionsService.findCompetition(competitionId)
            .subscribe(
                (data:Competition) => {
                    this.competition = data;
                },
                (err) => console.error(err),
                () => console.log('Loaded competition', this.competition)
            );
    }

    ngOnDestroy():any {
        this._selectionsSubscription.unsubscribe(); // prevent memory leak when component destroyed
    }
}
