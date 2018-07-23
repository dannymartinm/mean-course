import { Component, Input } from '../../../../node_modules/@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
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
  @Input() posts = [];
}
