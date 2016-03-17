import {Component} from 'angular2/core';
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {OnDestroy} from "angular2/core";
import {Input} from "angular2/core";
import {Status} from "../core/domain/Status";
import {OnInit} from "angular2/core";
import {OnChanges} from "angular2/core";

@Component({
    selector: 'competition-status',
    templateUrl: 'app/competition-status.component/competition-status.component.html',
    styleUrls: ['app/competition-status.component/competition-status.component.css'],
    directives: []
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
