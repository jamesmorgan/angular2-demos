import {BASE_URL} from "./Api";
import {Http} from "angular2/http";
import {User} from "../domain/User";
import {Injectable} from "angular2/core";

@Injectable()
export class UserApi {

    constructor(private _http:Http) {
    }

    load() {
        return this._http.get(BASE_URL + '/users')
            .map(res => res.json())
            .map((users)=> {
                return this.parseUsers(users);
            });
    }

    private parseUsers(users:Object[]):User[] {
        return users.map(function (user) {
            return new User().fromJson(user);
        });
    }
}