System.register(['angular2/core', '../calculator.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, calculator_service_1;
    var CalculatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            CalculatorComponent = (function () {
                function CalculatorComponent(_calcService) {
                    this._calcService = _calcService;
                    this.history = '';
                    this.result = '';
                }
                CalculatorComponent.prototype.ngOnInit = function () {
                };
                CalculatorComponent.prototype.onDigit = function (digit) {
                    console.log("Selected digit", digit);
                    this.history += digit;
                };
                CalculatorComponent.prototype.onAction = function (action) {
                    console.log("Selected action", action);
                    this.history += action;
                };
                CalculatorComponent.prototype.onAnswer = function () {
                    var _this = this;
                    console.log('Attempting to answer equation', this.history);
                    var equation = this.history.replace(/x/g, '*').replace(/÷/g, '/');
                    this._calcService.evaluate(equation)
                        .then(function (result) { return _this.result = result; })
                        .catch(function () { return _this.result = "Error"; });
                };
                CalculatorComponent.prototype.onBack = function () {
                    console.log('Move back digit');
                    this.history = this.history.substring(0, this.history.length - 1);
                };
                CalculatorComponent.prototype.onClear = function () {
                    console.log('Clearing equation');
                    this.result = "";
                    this.history = "";
                };
                CalculatorComponent = __decorate([
                    core_1.Component({
                        selector: 'my-calculator',
                        styleUrls: ['app/calculator.component/calculator.component.css'],
                        templateUrl: 'app/calculator.component/calculator.component.html'
                    }), 
                    __metadata('design:paramtypes', [calculator_service_1.CalculatorService])
                ], CalculatorComponent);
                return CalculatorComponent;
            }());
            exports_1("CalculatorComponent", CalculatorComponent);
        }
    }
});
//# sourceMappingURL=calculator.component.js.map