import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Competition} from "../domain/Competition";

@Injectable()
export class CompetitionsService {

    competitions:Competition;

    constructor(http:Http) {
        // TODO http://localhost:8080/competitions .. ? unable due to CrossOriginRequest - currently loaded from local json file

        // Make the request for the data on load
        //http.get('competitions.json')
        http.get('http://localhost:8080/competitions')
            // Subscribe to the observable to get response object
            .subscribe(res => {
                if (res.ok) {
                    console.log('Unable to subscribe to competitions', res.status, res.text());
                } else {
                    // Parse the response into a full domain class
                    this.parseCompetitions(res.json());
                }
            });
    }

    private parseCompetitions(competitions):void {
        this.competitions = competitions.map(function (competition) {
            return new Competition().fromJson(competition);
        });
        console.log('Parsed competitions', this.competitions);
    }
}