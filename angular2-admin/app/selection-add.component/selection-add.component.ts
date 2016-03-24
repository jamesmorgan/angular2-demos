import {Component, Input} from "angular2/core";

@Component({
    selector: 'selection-add',
    templateUrl: 'app/selection-add.component/selection-add.component.html',
    styleUrls: ['app/selection-add.component/selection-add.component.css'],
})
export class SelectionAddComponent  {

    /** Public data */
    @Input() selections:Selection[];
    @Input() pots:String[];
    newSelection:Selection;

    newSelectionIdStr:String;

    addNewSelection(potIndex:number) {
        // FIXME - do I need to do this; see discussion: https://github.com/angular/angular/issues/4843
        this.newSelection = this.selections.find((obj:Selection) => obj._id.value === this.newSelectionIdStr);
        
        // update potIndex on selection
        this.newSelection.potIndex = potIndex;

        console.log(this.newSelection);

        // add to comp
    }
}
