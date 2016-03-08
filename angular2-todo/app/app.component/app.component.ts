import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TodoService} from "../core/todo.service";
import {TodoDashboardComponent} from '../todo-dashboard.component/todo-dashboard.component';
import {AboutMeComponent} from "../about-me.component/about-me.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        TodoService
    ]
})
@RouteConfig([
    {
        path: '/todos', name: 'TodoDashboard', component: TodoDashboardComponent,
        useAsDefault: true
    },
    {
        path: '/about', name: 'About', component: AboutMeComponent
    }
])
export class AppComponent {
}