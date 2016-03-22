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
    start:Date;
    selections:Selection[];
    status:Status;
    order:boolean;
    image:String;

    fromJson(comp) {
        this._id = new ID(comp._id);
        this.name = comp.name;
        this.game = new ID(comp.game);
        this.description = comp.description;
        this.shortName = comp.shortName;
        this.updated = new Date(comp.updated * 1000); // unix -> js date
        this.start = new Date(comp.start * 1000); // unix -> js date
        this.status = new Status(comp.status);
        this.order = comp.order;
        this.image = comp.image;
        this.selections = comp.selections.map(function (selection) {
            return new Selection().fromJson(selection);
        });
        return this;
    }
}