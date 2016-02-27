import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { CalculatorService } from "../calculator.service";

import { CalculatorComponent } from '../calculator.component/calculator.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Calculator']">Calculator</a>
    </nav>
    <br />
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CalculatorService
    ]
})
@RouteConfig([
    {
        path: '/calculator',
        name: 'Calculator',
        component: CalculatorComponent,
        useAsDefault: true
    }
])
export class AppComponent {
    title = 'Angular2 Calculator';
}