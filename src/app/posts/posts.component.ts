import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { AppError, NotFoundError, BadRequestError } from '../errors'


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];


  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe({
        next: (posts) => {
          this.posts = posts as any[];
        }
      })
  }

  createPost(title: HTMLInputElement) {
    const post: any = { title: title.value };
    (this.posts as any[]).splice(0, 0, post);
    title.value = "";

    this.service.create(post)
      .subscribe({
        next: (newPost: any) => {
          post['id'] = newPost?.id;
        },
        error: (error: AppError) => {
          (this.posts as any[]).splice(0, 1);

          if (error instanceof BadRequestError) {
            // this.form.setError(error.actualError);
          } else throw error;
        }
      })
  }

  updatePost(post: any) {
    this.service.update(post, { isRead: true })
      .subscribe({
        next: (updatedPost) => {
          console.log(updatedPost);
        }
      })
  }

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe({
        error: (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert("Post already deleted.")
          } else throw error;
        }
      })
  }

}
