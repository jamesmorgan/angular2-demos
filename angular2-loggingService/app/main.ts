import {bootstrap}    from 'angular2/platform/browser'
import {bind} from "angular2/core";
import {provide} from "angular2/core";

import {AppComponent} from './app.component/app.component'

import {ExceptionHandler} from "angular2/core";
import {CustomExceptionHandler} from "./custom.exception-handler";

bootstrap(AppComponent,
    [
        provide(ExceptionHandler, {useClass: CustomExceptionHandler})
    ]
).catch(err => console.error(err));

bootstrap(AppComponent);