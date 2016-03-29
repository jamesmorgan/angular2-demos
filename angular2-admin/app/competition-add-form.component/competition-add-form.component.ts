import {Component, OnDestroy, ChangeDetectionStrategy} from "angular2/core";
import {FormCompetition} from "../core/domain/Competition";
import {Status} from "../core/domain/Status";
import {GamesService} from "../core/services/GameService";
import {Subscription} from "rxjs/Subscription";
import {CompetitionsService} from "../core/services/CompetitionsService";

@Component({
    selector: 'competition-add-form',
    templateUrl: 'app/competition-add-form.component/competition-add-form.component.html',
    styleUrls: ['app/competition-add-form.component/competition-add-form.component.css'],
    directives: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionAddFormComponent implements OnDestroy {

    model:FormCompetition = new FormCompetition();

    form = {
        statuses: [...Status.Statuses],
        selections: [],
        games: []
    };

    private _gamesSubscription:Subscription;

    constructor(private _gamesService:GamesService, private _competitionService:CompetitionsService) {
        this._gamesSubscription = this._gamesService.gamesChanged$.subscribe((games) => {
            this.form.games = [...games];
        });
    }

    createCompetition() {
        var comp = this.model.toCompetition();
        this._competitionService.createCompetition(comp)
            .subscribe(
                (result) => {
                    
                },
                (err) => {

                }
            )
    }

    onStatusSelected(value) {
        this.model.status = this.form.statuses.find((obj) => obj.value === value);
        console.log('onStatusSelected(value) = ' + value, this.model.status);
    }

    ngOnDestroy():any {
        return this._gamesSubscription.unsubscribe();
    }

}