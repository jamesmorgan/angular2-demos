import {Component, Input} from "angular2/core";
import {ID} from "../core/domain/ID";
import {CompetitionsService} from "../core/services/CompetitionsService";

@Component({
    selector: 'selection-add',
    templateUrl: 'app/selection-add.component/selection-add.component.html',
    styleUrls: ['app/selection-add.component/selection-add.component.css'],
})
export class SelectionAddComponent  {

    /** Public data */
    @Input() selections:Selection[];
    @Input() pots:String[];
    @Input() compId:ID;
    
    newSelection:Selection;
    newSelectionIdStr:String;

    constructor(private _competitionsService:CompetitionsService) {
    }

    addNewSelection(potIndex:number) {
        // FIXME - do I need to do this; see discussion: https://github.com/angular/angular/issues/4843
        this.newSelection = this.selections.find((obj:Selection) => obj._id.value === this.newSelectionIdStr);
        
        // update potIndex on selection
        this.newSelection.potIndex = potIndex;
        this.setSelectionDefaults(this.newSelection);

        console.log(this.newSelection);
        console.log(this.compId);

        // add selected selection to comp
        this._competitionsService.addSelectionToCompetition(this.compId, this.newSelection);
    }

    private setSelectionDefaults(selection:Selection) {
        selection.score = 0;
        selection.multiplier = 1;
        selection.handicap = 0;
    }
}
