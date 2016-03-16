import {ID} from "./ID";

export class Selection {

    selection:ID;
    potIndex:number;
    multiplier:number;
    handicap:number;
    score:number;
    selectionName:String;

    fromJson(selection) {
        this.selection = new ID(selection.selection);
        this.score = selection.score;
        this.potIndex = selection.potIndex;
        this.multiplier = selection.multiplier;
        this.handicap = selection.handicap;
        this.selectionName = selection.selectionName;
        return this;
    }
}