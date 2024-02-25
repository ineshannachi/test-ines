import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  // Add methods for CRUD operations here

  private getPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}