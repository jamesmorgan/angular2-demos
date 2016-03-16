import {Component} from 'angular2/core';
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {EventEmitter} from "angular2/core";
import {OnDestroy} from "angular2/core";
import {Input} from "angular2/core";

@Component({
    selector: 'selection-item',
    templateUrl: 'app/selection-item.component/selection-item.component.html',
    styleUrls: ['app/selection-item.component/selection-item.component.css'],
})
export class SelectionItemComponent implements OnDestroy {

    /** Public data */
    @Input() selection:Selection;

    ngOnDestroy() {

    }
}
