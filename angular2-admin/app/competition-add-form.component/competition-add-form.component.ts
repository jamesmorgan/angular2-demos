import {Component, OnDestroy} from "angular2/core";
import {FormCompetition} from "../core/domain/Competition";
import {Status} from "../core/domain/Status";
import {GamesService} from "../core/services/GameService";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'competition-add-form',
    templateUrl: 'app/competition-add-form.component/competition-add-form.component.html',
    styleUrls: ['app/competition-add-form.component/competition-add-form.component.css'],
    directives: []
})
export class CompetitionAddFormComponent implements OnDestroy {

    model:FormCompetition = new FormCompetition();

    form = {
        statuses: [...Status.Statuses],
        games: []
    };

    private _gamesSubscription:Subscription;

    constructor(private _gamesService:GamesService) {
        // Subscribe an changes which may happen
        this._gamesSubscription = this._gamesService.gamesChanged$.subscribe((games) => {
            this.form.games = [...games];
        });
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    ngOnDestroy():any {
        return this._gamesSubscription.unsubscribe();
    }

}