export class Status {

    static OPEN = new Status('open');
    static POST_MATCH = new Status('post_match');
    static PRE_MATCH = new Status('pre_match');
    static IN_PLAY = new Status('in_play');

    static Statuses = [
        Status.OPEN,
        Status.IN_PLAY,
        Status.PRE_MATCH,
        Status.POST_MATCH
    ];

    value:String;

    constructor(status:String) {
        this.value = status;
    }

    toString():String {
        return this.value;
    }
}