import {Headers} from "angular2/http";

/**
 * Centralise this so we can work out how to switch it out in the future if needs be
 *
 * @type {string}
 */
export var BASE_URL:String = Object.freeze('http://localhost:2000');
export var ADMIN_AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NmZiYzJmNGRiNzllNDA5MmI4MjA3NjkiLCJuYW1lIjoiQW5keSBHcmF5IiwiZW1haWwiOiJhbmR5QHdoYXRzdGhlc2NvcmUuY28udWsiLCJhZG1pbiI6dHJ1ZX0.mBxW4Zc9OpmZivo0wJh1Luoc8OyFBATIIRASRi405AU'

/**
 * General factory method for return json headers
 *
 * @return {Headers}
 */
export function json():Headers {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + ADMIN_AUTH_TOKEN);
    return headers;
}