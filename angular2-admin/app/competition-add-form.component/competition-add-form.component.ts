import {Component} from "angular2/core";
import {Competition} from "../core/domain/Competition";
import {Status} from "../core/domain/Status";

@Component({
    selector: 'competition-add-form',
    templateUrl: 'app/competition-add-form.component/competition-add-form.component.html',
    styleUrls: ['app/competition-add-form.component/competition-add-form.component.css'],
    directives: []
})
export class CompetitionAddFormComponent {

    model:Competition = new Competition();

    form = {
        statuses: [...Status.Statuses]
    };

    constructor() {
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
