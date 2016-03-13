import {ExceptionHandler} from "angular2/core";

export class CustomExceptionHandler extends ExceptionHandler {

    call(error, stackTrace = null, reason = null) {
        console.log('Here is the error', error, stackTrace, reason);
    }
}