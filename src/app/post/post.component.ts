import {Component, Input, OnInit} from '@angular/core';
import {WordpressService} from '../services/wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;
  featured;
  comments;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    if (this.post.featured_media !== 0) {
      // On est sur un post avec une image mise en avant
      this.wp.getMediaById(this.post.featured_media).subscribe(
        media => this.featured = media
      );
    }
    this.wp.getCommentByPost(this.post.id).subscribe(
      comments => this.comments = comments
    );
  }

}
