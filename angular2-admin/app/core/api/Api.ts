import {Headers} from "angular2/http";

/**
 * Centralise this so we can work out how to switch it out in the future if needs be
 *
 * @type {string}
 */
export var BASE_URL:String = Object.freeze('http://localhost:8080');

/**
 * General factory method for return json headers
 *
 * @return {Headers}
 */
export function json():Headers {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
}