import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {Status} from "../domain/Status";
import {Competition} from "../domain/Competition";
import {BASE_URL, json} from "./Api";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import "rxjs/Rx";

@Injectable()
export class CompetitionApi {

    constructor(private _http:Http) {
    }

    create(comp:Competition) {
        return this._http.post(BASE_URL + '/auth/competition', JSON.stringify(comp), {
                headers: json()
            })
            .map(res => res.json())
            .map((competition)=> {
                return Competition.fromJson(competition);
            })
            .share();
    }

    delete(compId:string) {
        return this._http.delete(BASE_URL + '/competition/' + compId, {
                headers: json()
            })
            .map(res => res.json())
            .share();
    }

    load():Observable<Competition[]> {
        return this._http.get(BASE_URL + '/competitions')
            .map(res => res.json())
            .map((comps)=> {
                return this.parseCompetitions(comps);
            })
            .share();
    }

    findCompetition(compId:String):Observable<Competition> {
        return this._http.get(BASE_URL + '/competition/' + compId)
            .map(res => res.json())
            .map((competition)=> {
                return Competition.fromJson(competition);
            })
            .share();
    }

    saveSelectionForComp(compId:String, selection:Selection):Observable<Response> {
        // /auth/ URLs are protected by the middleware
        return this._http.put(BASE_URL + '/auth/competition/selection/push/' + compId, JSON.stringify(selection), {
                headers: json()
            })
            .share();
    }

    updateScore(compId:String, selectionId:String, score:number):Observable<Response> {
        var payload = {
            selectionId: selectionId,
            score: score
        };

        // /auth/ URLs are protected by the middleware
        return this._http.put(BASE_URL + '/auth/competition/push/' + compId, JSON.stringify(payload), {
                headers: json()
            })
            .share();
    }

    updateStatus(compId:String, status:Status):Observable<Response> {
        var payload = {
            status: status.value
        };
        return this._http.put(BASE_URL + '/competition/status/' + compId, JSON.stringify(payload), {
                headers: json()
            })
            .share();
    }

    private parseCompetitions(competitions:Object[]):Competition[] {
        return competitions.map(function (competition) {
            return Competition.fromJson(competition);
        });
    }

}