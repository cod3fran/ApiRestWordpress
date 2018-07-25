import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cockpit-article',
  templateUrl: './cockpit-article.component.html',
  styleUrls: ['./cockpit-article.component.css']
})
export class CockpitArticleComponent implements OnInit {

  @Input() article;
  urlServeurImages = 'http://localhost';

  constructor() { }

  ngOnInit() {
  }

}
