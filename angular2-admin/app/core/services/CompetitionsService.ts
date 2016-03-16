import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Competition} from "../domain/Competition";
import {EventEmitter} from "angular2/core";

@Injectable()
export class CompetitionsService {

    competitions:Competition[];

    onCompetitionsChanged = new EventEmitter<Competition[]>();

    constructor(http:Http) {
        http.get('http://localhost:8080/competitions')
            .subscribe(res => {
                if (res.ok) {
                    console.log('Unable to subscribe to competitions', res.status, res.text());
                } else {
                    this.parseCompetitions(res.json());
                    this.triggerCompetitionsChanged();
                }
            });
    }

    private triggerCompetitionsChanged():void {
        this.onCompetitionsChanged.emit(this.competitions);
    }

    private parseCompetitions(competitions:Object[]):void {
        this.competitions = competitions.map(function (competition) {
            return new Competition().fromJson(competition);
        });
        console.log('Parsed competitions', this.competitions);
    }
}