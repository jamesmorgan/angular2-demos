import { Component } from 'angular2/core';
import { ExceptionHandler } from 'angular2/core';
import {Provider} from "angular2/core";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>

    <button (click)="causeError()">Cause Error</button>
    `,
    styleUrls: ['app/app.component/app.component.css'],
    directives: [],
    providers: []
})
export class AppComponent {
    title = 'Angular2 ExceptionHandler';

    constructor() {
        setTimeout(function () {
            throw new Error('Some error');
        }, 1000);
    }

    causeError() {
        throw new Error('Triggering an error');
    }
}

export class MyExceptionHandler extends ExceptionHandler {
    call(error, stackTrace = null, reason = null) {
        console.log('Here is the error', error);
    }
}