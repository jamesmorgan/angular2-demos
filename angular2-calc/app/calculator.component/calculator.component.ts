import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {CalculatorService} from '../calculator.service';

@Component({
    selector: 'my-calculator',
    styleUrls: ['app/calculator.component/calculator.component.css'],
    templateUrl: 'app/calculator.component/calculator.component.html'
})
export class CalculatorComponent implements OnInit {

    private history:String = '';
    private result:String = '';

    constructor(private _calcService:CalculatorService) {
    }

    ngOnInit() {
    }

    onDigit(digit) {
        console.log("Selected digit", digit);
        this.history += digit;
    }

    onAction(action) {
        console.log("Selected action", action);
        this.history += action;
    }


    onAnswer() {
        console.log('Attempting to answer equation', this.history);
        var equation = this.history.replace(/x/g, '*').replace(/÷/g, '/');
        this._calcService.evaluate(equation)
            .then(result => this.result = result)
            .catch(() => this.result = "Error");
    }

    onBack() {
        console.log('Move back digit');
        this.history = this.history.substring(0, this.history.length - 1);
    }

    onClear() {
        console.log('Clearing equation');
        this.result = "";
        this.history = "";
    }
}