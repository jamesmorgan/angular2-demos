import {Component, Input, ChangeDetectionStrategy} from "angular2/core";
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Status} from "../core/domain/Status";
import {Competition} from "../core/domain/Competition";

@Component({
    selector: 'competition-status',
    templateUrl: 'app/competition-status.component/competition-status.component.html',
    styleUrls: ['app/competition-status.component/competition-status.component.css'],
    directives: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionStatusComponent {

    /** Public data */
    @Input() competition:Competition;

    form = {
        statuses: [...Status.Statuses]
    };

    constructor(private _competitionsService:CompetitionsService) {

    }

    statusSelected() {
        console.log(this.competition.status);
        this._competitionsService.updateStatus(this.competition._id, this.competition.status);
    }

}
