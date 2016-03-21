import {ID} from "./ID";

export class Selection {

    _id:ID;
    name:String;
    potIndex:number;
    multiplier:number;
    handicap:number;
    score:number;
    sport:String;
    avatar:String;

    fromJson(selection) {
        this._id = new ID(selection._id);
        this.name = selection.name;
        this.score = selection.score;
        this.potIndex = selection.potIndex;
        this.multiplier = selection.multiplier;
        this.handicap = selection.handicap;
        this.sport = selection.sport;
        this.avatar = selection.avatar;
        return this;
    }
}