import {Component, Input} from "angular2/core";
import {Competition} from "../core/domain/Competition";
import {CompetitionsService} from "../core/services/CompetitionsService";

@Component({
    selector: 'selection-item',
    templateUrl: 'app/selection-item.component/selection-item.component.html',
    styleUrls: ['app/selection-item.component/selection-item.component.css'],
})
export class SelectionItemComponent  {

    /** Public data */
    @Input() selection:Selection;
    @Input() competition:Competition;

    constructor(private _competitionsService:CompetitionsService) {

    }

    adjustScore(adjust:number) {
        console.log(this.selection.name + ' ' + (this.selection.score + adjust));
        this._competitionsService.updateSelectionScore(this.competition._id, this.selection._id, this.selection.score + adjust);
    }
}
