import { Component, OnInit } from '@angular/core';
import {CockpitService} from '../services/cockpit.service';
import {DirectusService} from '../services/directus.service';

@Component({
  selector: 'app-directus-list',
  templateUrl: './directus-list.component.html',
  styleUrls: ['./directus-list.component.css']
})
export class DirectusListComponent implements OnInit {

  articles: Array<any>;

  constructor(private directus: DirectusService) { }

  ngOnInit() {
    this.articles = new Array();
    this.directus.getRows('articles').subscribe(
      retour => {
        console.log(retour);
        for (const cont of retour) {
          console.log('Dans retour : ' + cont);
        }
        const data = retour.data;
        console.log(data);
        for (const article of data) {
          console.log(article);
          this.articles.push(article);
        }
      }
    );
  }
}
