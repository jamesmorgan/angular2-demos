import {Component, OnDestroy, Input} from "angular2/core";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {SelectionsListComponent} from "../selections-list.component/selections-list.component";
import {CompetitionStatusComponent} from "../competition-status.component/competition-status.component";
import {DatePipe} from "angular2/common";

@Component({
    selector: 'competitions-list',
    templateUrl: 'app/competitions-list.component/competitions-list.component.html',
    styleUrls: ['app/competitions-list.component/competitions-list.component.css'],
    directives: [
        SelectionsListComponent,
        CompetitionStatusComponent
    ],
    pipes: [DatePipe]
})
export class CompetitionsListComponent implements OnDestroy {

    /** Public data */
    @Input() competitions:Competition[];

    constructor(private _competitionService:CompetitionsService) {
    }

    loadCompetition(competition) {
        this._competitionService.findCompetition(competition._id)
            .subscribe(
                (data) => console.log(data),
                (err) => console.error(err)
            )
    }

    ngOnDestroy() {

    }
}
