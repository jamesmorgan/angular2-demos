import {ID} from "./ID";
import {Selection} from "./Selection";
import {Status} from "./Status";

export class Competition {

    _id:ID;
    name:String;
    game:ID;
    description:String;
    shortName:String;
    updated:Date;
    startDate:Date;
    selections:Selection[];
    status:Status;
    order:boolean;
    image:String;

    static fromJson(comp):Competition {
        var competition = new Competition();
        competition._id = new ID(comp._id);
        competition.name = comp.name;
        competition.game = new ID(comp.game);
        competition.description = comp.description;
        competition.shortName = comp.shortName;
        competition.updated = new Date(comp.updated * 1000); // unix -> js date
        competition.startDate = new Date(comp.start * 1000); // unix -> js date
        competition.status = new Status(comp.status);
        competition.order = comp.order;
        competition.image = comp.image;
        competition.selections = comp.selections.map(function (selection) {
            return Selection.fromJson(selection);
        });
        return competition;
    }
}