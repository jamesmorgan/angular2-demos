import {Injectable} from 'angular2/core';

@Injectable()
export class CalculatorService {

    evaluate(equation) {
        return Promise.resolve(eval(equation));
    }

}