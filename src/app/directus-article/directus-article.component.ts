import {Component, Input, OnInit} from '@angular/core';
import {DirectusService} from '../services/directus.service';

@Component({
  selector: 'app-directus-article',
  templateUrl: './directus-article.component.html',
  styleUrls: ['./directus-article.component.css']
})
export class DirectusArticleComponent implements OnInit {

  @Input() article;
  urlServeurImages = 'http://localhost';

  constructor() { }

  ngOnInit() {
  }
}
