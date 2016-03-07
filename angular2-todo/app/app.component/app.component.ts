import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TodoService} from "../core/todo.service";
import {TodoDashboardComponent} from '../todo-dashboard.component/todo-dashboard.component';

@Component({
    selector: 'my-app',
    templateUrl: ['app/app.component/app.component.html'],
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
    }
    //{
    //    path: '/detail/:id',
    //    name: 'HeroDetail',
    //    component: HeroDetailComponent
    //}
    //{
    //    path: '/about',
    //    name: 'About',
    //    component: AboutComponent
    //}
])
export class AppComponent {
    title = 'Angular2 TODO\'s';
}