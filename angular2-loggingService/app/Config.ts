import {Injectable} from "angular2/core";
/**
 * Basic Configuration object
 */
@Injectable()
export class Config {

    /**
     *
     * @type {string}
     */
    private env:String = 'prod';

    /**
     *
     * @return {boolean}
     */
    isProd():boolean {
        return this.env === 'prod';
    }
}