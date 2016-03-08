import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component/app.component'
import {ExceptionHandler} from "angular2/core";
import {MyExceptionHandler} from "./app.component/app.component";
import {bind} from "angular2/core";


bootstrap(AppComponent, [
    bind(ExceptionHandler).toClass(MyExceptionHandler)
]).catch(err => console.error(err));