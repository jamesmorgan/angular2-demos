import {Component} from 'angular2/core';

@Component({
    selector: 'about-me',
    templateUrl: 'app/about-me.component/about-me.component.html',
    styleUrls: ['app/about-me.component/about-me.component.css']
})
export class AboutMeComponent {

    links:AboutLink[] = [
        {title: 'Github', description: 'my code', link: 'https://github.com/jamesmorgan'},
        {title: 'Personal', description: 'about me', link: 'http://jem-solutions.co.uk'},
        {title: 'Twitter', description: 'get in touch', link: 'https://twitter.com/jimbob_87'},
    ];

}

interface AboutLink {
    title: string;
    description: string;
    link: string;
}