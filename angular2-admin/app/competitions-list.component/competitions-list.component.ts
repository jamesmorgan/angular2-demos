import {Component} from 'angular2/core';
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {EventEmitter} from "angular2/core";
import {OnDestroy} from "angular2/core";
import {Input} from "angular2/core";
import {SelectionsListComponent} from "../selections-list.component/selections-list.component";
import {CompetitionStatusComponent} from "../competition-status.component/competition-status.component";

@Component({
    selector: 'competitions-list',
    templateUrl: 'app/competitions-list.component/competitions-list.component.html',
    styleUrls: ['app/competitions-list.component/competitions-list.component.css'],
    directives: [
        SelectionsListComponent,
        CompetitionStatusComponent
    ]
})
export class CompetitionsListComponent implements OnDestroy {

    /** Public data */
    @Input() competitions:Competition[];

    ngOnDestroy() {

    }
}
