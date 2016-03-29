import {Selection} from "./Selection";
import {Status} from "./Status";

export class Competition {

    _id:String;
    name:String;
    game:String;
    description:String;
    shortName:String;
    updated:Date;
    start:Date;
    pots:String[];
    selections:Selection[];
    status:Status;
    order:boolean;
    image:String;

    static fromJson(comp):Competition {
        var competition = new Competition();
        competition._id = comp._id;
        competition.name = comp.name;
        competition.game = comp.game;
        competition.description = comp.description;
        competition.shortName = comp.shortName;
        competition.updated = new Date(comp.updated * 1000); // unix -> js date
        competition.start = new Date(comp.start * 1000); // unix -> js date
        competition.status = new Status(comp.status);
        competition.order = comp.order;
        competition.image = comp.image;
        competition.pots = comp.pots;
        competition.selections = comp.selections.map(function (selection) {
            return Selection.fromJson(selection);
        });
        return competition;
    }
}

//TODO I needed a simplified model as I could not bind to the Status Object?
export class FormCompetition {
    name:string;
    game:string;
    description:string;
    shortName:string;
    gameId:string;
    start:Date;
    selections:Selection[];
    status:Status;
    order:boolean;
    image:string;

    // TODO this feels wrong...?
    toCompetition():Competition {
        var competition = new Competition();
        competition.name = this.name;
        competition.game = this.game;
        competition.description = this.description;
        competition.shortName = this.shortName;
        competition.status = this.status;
        competition.order = this.order;
        competition.image = this.image;
        competition.selections = this.selections;
        return competition;
    }
}