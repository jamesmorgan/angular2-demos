
export class User {

    _id:String;
    name:String;
    email:String;
    created:Date;
    admin:boolean;

    fromJson(user) {
        this._id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.created = new Date(user.created * 1000); // unix -> js date
        this.admin = user.admin;
        return this;
    }
}