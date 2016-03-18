export class Status {

    static OPEN = new Status('open');
    static PENDING = new Status('pending');
    static IN_PLAY = new Status('inplay');
    static CLOSED = new Status('closed');
    static ARCHIVE = new Status('archive');

    static Statuses = [
        Status.OPEN,
        Status.PENDING,
        Status.IN_PLAY,
        Status.CLOSED,
        Status.ARCHIVE
    ];

    value:String;

    constructor(status:String) {
        this.value = status;
    }

    toString():String {
        return this.value;
    }
}