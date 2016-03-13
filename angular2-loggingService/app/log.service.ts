import {Config} from "./Config";
import {Injectable} from "angular2/core";
import {Inject} from "angular2/core";

/**
 * Sample Log Service
 */
@Injectable()
export class LogService {

    enabled = true;

    constructor(_config:Config) {
        this.enabled = _config.isProd();
    }

    assert(message) {
        if (this.enabled) {
            console.assert(message);
        }
    }

    debug(message, ...args) {
        if (this.enabled) {
            console.debug(message, args);
        }
    }

    error(message, ...args) {
        if (this.enabled) {
            console.error(message, args);
        }
    }

    info(message, ...args) {
        if (this.enabled) {
            console.info(message, args);
        }
    }

    log(message, ...args) {
        if (this.enabled) {
            console.log(message, args);
        }
    }

    trace(message, ...args) {
        if (this.enabled) {
            console.trace(message, args);
        }
    }

    warn(message, ...args) {
        if (this.enabled) {
            console.warn(message, args);
        }
    }

    clear() {
        console.clear();
    }
}