export class Status {

    status:String;

    constructor(status:String) {
        this.status = status;
    }

    toString():String {
        return this.status;
    }
}