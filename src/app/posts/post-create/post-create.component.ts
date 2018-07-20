import { Component } from '../../../../node_modules/@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';
  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue;
    this.enteredValue = '';
  }
}
