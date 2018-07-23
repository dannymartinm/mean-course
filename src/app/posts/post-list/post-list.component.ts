import {
  Component,
  OnInit,
  OnDestroy
} from '../../../../node_modules/@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'First posts content'
  //   },
  //   {
  //     title: 'Second Post',
  //     content: 'Second posts content'
  //   },
  //   {
  //     title: 'Third Post',
  //     content: 'Third posts content'
  //   }
  // ];

  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostService) {
    // this.postsService = postsService;
  }
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
