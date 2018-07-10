import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WordpressService} from '../wordpress.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.posts$ = this.wp.getPosts();
  }

}
