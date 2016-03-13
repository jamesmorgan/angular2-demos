import {Component} from 'angular2/core';
import {LogService} from "../log.service";

@Component({
    selector: 'my-logging-dashboard',
    templateUrl: 'app/logging-dashboard.component/logging-dashboard.component.html',
    styleUrls: ['app/logging-dashboard.component/logging-dashboard.component.css'],
    pipes: [],
    directives: []
})
export class LoggingDashboardComponent {

    message:string = '';

    constructor(private _logService:LogService) {
    }

    clear():void {
        this.message = '';
    }

    assert() {
        this._logService.assert(this.message);
    }

    log() {
        this._logService.log(this.message);
    }

    trace() {
        this._logService.trace(this.message);
    }

    debug() {
        this._logService.debug(this.message);
    }

    info() {
        this._logService.info(this.message);
    }

    warn() {
        this._logService.warn(this.message);
    }

    error() {
        this._logService.error(this.message);
    }

    throwException() {
        throw new Error('A Manually Triggered Exception');
    }
}