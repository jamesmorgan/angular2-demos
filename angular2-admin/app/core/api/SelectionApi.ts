import {Selection} from "../domain/Selection";
import {BASE_URL} from "./Api";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class SelectionApi {

    constructor(private _http:Http) {
    }

    load() {
        return this._http.get(BASE_URL + '/selections')
            .map(res => res.json())
            .map((comps)=> {
                return this.parseSelections(comps);
            });
    }

    private parseSelections(selections:Object[]):Selection[] {
        return selections.map(function (selection) {
            return Selection.fromJson(selection);
        });
    }
}