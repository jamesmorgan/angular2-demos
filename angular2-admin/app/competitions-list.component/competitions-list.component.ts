import {Component} from 'angular2/core';
import {CompetitionsService} from "../core/services/CompetitionsService";

@Component({
    selector: 'competitions-list',
    templateUrl: 'app/competitions-list.component/competitions-list.component.html',
    styleUrls: ['app/competitions-list.component/competitions-list.component.css'],
})
export class CompetitionsListComponent {

    constructor(_competitionsService:CompetitionsService) {

    }

}
