import {Component, Input} from "angular2/core";

@Component({
    selector: 'selection-add',
    templateUrl: 'app/selection-add.component/selection-add.component.html',
    styleUrls: ['app/selection-add.component/selection-add.component.css'],
})
export class SelectionAddComponent  {

    /** Public data */
    @Input() selections:Selection[];
    // @Input() potIndex:number;
    newSelection:Selection;

    addNewSelection() {
        console.log(this.newSelection);
    }
}
