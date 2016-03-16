import {Component} from 'angular2/core';
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {EventEmitter} from "angular2/core";
import {OnDestroy} from "angular2/core";
import {Input} from "angular2/core";
import {SelectionItemComponent} from "../selection-item.component/selection-item.component";

@Component({
    selector: 'selections-list',
    templateUrl: 'app/selections-list.component/selections-list.component.html',
    styleUrls: ['app/selections-list.component/selections-list.component.css'],
    directives: [
        SelectionItemComponent
    ]
})
export class SelectionsListComponent implements OnDestroy {

    /** Public data */
    @Input() selections:Selection[];

    ngOnDestroy() {

    }
}
