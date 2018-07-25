import { Component, OnInit } from '@angular/core';
import {CockpitService} from '../services/cockpit.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cockpit-list',
  templateUrl: './cockpit-list.component.html',
  styleUrls: ['./cockpit-list.component.css']
})
export class CockpitListComponent implements OnInit {

  articles: Array<any>;

  constructor(private cockpit: CockpitService) { }

  ngOnInit() {
    this.articles = new Array();
    this.cockpit.getEntriesByCollection('Articles').subscribe(
      articleListe => {
        const entries = articleListe.entries;
        for (const entry of entries) {
          this.articles.push(entry);
        }
      }
    );
  }

}
