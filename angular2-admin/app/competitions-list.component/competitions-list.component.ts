import {Component, OnDestroy, Input, ChangeDetectionStrategy} from "angular2/core";
import {Router} from "angular2/router";
import {Competition} from "../core/domain/Competition";
import {CompetitionStatusComponent} from "../competition-status.component/competition-status.component";

@Component({
    selector: 'competitions-list',
    templateUrl: 'app/competitions-list.component/competitions-list.component.html',
    styleUrls: ['app/competitions-list.component/competitions-list.component.css'],
    directives: [
        CompetitionStatusComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionsListComponent implements OnDestroy {

    /** Public data */
    @Input()
    competitions:Competition[];

    constructor(private _router:Router) {
    }

    loadCompetition(competition) {
        this._router.navigate(['AdminCompetitionEdit', {competitionId: competition._id}]);
    }

    ngOnDestroy() {

    }
}
