import {Http, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {ID} from "../domain/ID";
import {Status} from "../domain/Status";
import {Competition} from "../domain/Competition";


@Injectable()
export class CompetitionApi {

    private BASE_URL:String = 'http://localhost:8080';

    constructor(private _http:Http) {
    }

    create(comp:Competition) {
        return this._http.post(this.BASE_URL + '/auth/competition', JSON.stringify(comp), {
            headers: CompetitionApi.json()
        });
    }

    load():Observable<Competition[]> {
        return this._http.get(this.BASE_URL + '/competitions')
            .map(res => res.json())
            .map((comps)=> {
                return this.parseCompetitions(comps);
            });
    }

    findCompetition(compId:ID):Observable<Competition> {
        return this._http.get(this.BASE_URL + '/competition/' + compId.toString())
            .map(res => res.json())
            .map((competition)=> {
                return new Competition().fromJson(competition);
            });
    }

    saveSelectionForComp(compId:ID, selection:Selection) {
        var payload = {
            selection: selection
        };

        // /auth/ URLs are protected by the middleware
        return this._http.put(this.BASE_URL + '/auth/competition/selection/push/' + compId.toString(), JSON.stringify(payload), {
            headers: CompetitionApi.json()
        });
    }
    
    updateScore(compId:ID, selectionId:ID, score:number) {
        var payload = {
            selectionId: selectionId.toString,
            score: score
        };

        // /auth/ URLs are protected by the middleware
        return this._http.put(this.BASE_URL + '/auth/competition/push/' + compId.toString(), JSON.stringify(payload), {
            headers: CompetitionApi.json()
        });
    }

    updateStatus(compId:ID, status:Status):Observable<Response> {
        var payload = {
            status: status
        };
        return this._http.put(this.BASE_URL + '/competition/status/' + compId.toString(), JSON.stringify(payload), {
            headers: CompetitionApi.json()
        });
    }

    private parseCompetitions(competitions:Object[]):Competition[] {
        return competitions.map(function (competition) {
            return new Competition().fromJson(competition);
        });
    }

    private static json():Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

}