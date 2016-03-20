import {Http, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {ID} from "../domain/ID";
import {Status} from "../domain/Status";

@Injectable()
export class CompetitionApi {

    constructor(private _http:Http) {
    }

    load():Observable<Response> {
        return this._http.get('http://localhost:8080/competitions');
    }

    updateStatus(compId:ID, status:Status):Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var payload = {
            status: status
        };
        return this._http.put('http://localhost:8080/competition/status/' + compId.toString(), JSON.stringify(payload), {
            headers: headers
        })
    }
}