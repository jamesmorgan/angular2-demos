import {Component, OnDestroy, Input, ChangeDetectionStrategy} from "angular2/core";
import {SelectionItemComponent} from "../selection-item.component/selection-item.component";
import {Selection} from "../core/domain/Selection";

@Component({
    selector: 'selections-list',
    templateUrl: 'app/selections-list.component/selections-list.component.html',
    styleUrls: ['app/selections-list.component/selections-list.component.css'],
    directives: [
        SelectionItemComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionsListComponent implements OnDestroy {

    /** Public data */
    @Input() selections:Selection[];

    ngOnDestroy() {

    }
}
