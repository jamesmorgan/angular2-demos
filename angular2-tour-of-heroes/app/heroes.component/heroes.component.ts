import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail.component/hero-detail.component';
import {HeroService} from '../hero.service';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component/heroes.component.css'],
    templateUrl: 'app/heroes.component/heroes.component.html',
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    public title = 'Tour of Heroes';

    public heroes:Hero[];
    public selectedHero:Hero;

    constructor(private _heroService:HeroService,
                private _router:Router) {
    }

    ngOnInit():any {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}