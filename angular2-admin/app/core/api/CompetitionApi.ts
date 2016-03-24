import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {ID} from "../domain/ID";
import {Status} from "../domain/Status";
import {Competition} from "../domain/Competition";
import {BASE_URL, json} from "./Api";


@Injectable()
export class CompetitionApi {

    constructor(private _http:Http) {
    }

    create(comp:Competition) {
        return this._http.post(BASE_URL + '/auth/competition', JSON.stringify(comp), {
            headers: json()
        });
    }

    load():Observable<Competition[]> {
        return this._http.get(BASE_URL + '/competitions')
            .map(res => res.json())
            .map((comps)=> {
                return this.parseCompetitions(comps);
            });
    }

    findCompetition(compId:ID):Observable<Competition> {
        return this._http.get(BASE_URL + '/competition/' + compId.value)
            .map(res => res.json())
            .map((competition)=> {
                return Competition.fromJson(competition);
            });
    }

    saveSelectionForComp(compId:ID, selection:Selection):Observable<Response> {
        // /auth/ URLs are protected by the middleware
        return this._http.put(BASE_URL + '/auth/competition/selection/push/' + compId.value, JSON.stringify(selection), {
            headers: json()
        });
    }

    updateScore(compId:ID, selectionId:ID, score:number):Observable<Response> {
        var payload = {
            selectionId: selectionId.value,
            score: score
        };

        // /auth/ URLs are protected by the middleware
        return this._http.put(BASE_URL + '/auth/competition/push/' + compId.value, JSON.stringify(payload), {
            headers: json()
        });
    }

    updateStatus(compId:ID, status:Status):Observable<Response> {
        var payload = {
            status: status.value
        };
        return this._http.put(BASE_URL + '/competition/status/' + compId.value, JSON.stringify(payload), {
            headers: json()
        });
    }

    private parseCompetitions(competitions:Object[]):Competition[] {
        return competitions.map(function (competition) {
            return Competition.fromJson(competition);
        });
    }

}