import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ipost } from './customTypes';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient: HttpClient) { }

  public $favFruit: Subject<string> = new Subject<string>();
  $posts: Subject<Ipost[]> = new Subject();

  setFavoriteFruit(favFruit: string): void {
    this.$favFruit.next(favFruit);
  }


  getPosts() {
    // set type of expected return in < >
    let request = this.httpClient.get<Ipost[]>('http://localhost:3000/posts');

    request.subscribe(
      {
        next: (data: Ipost[]) => {
          this.$posts.next(data);
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        },
        complete: () => {

        },

      }
    )
  }

  createPost(title: string, author: string) {

    let newPost: Ipost =
    {

      title: title,
      author: author
    };

    let request = this.httpClient.post("http://localhost:3000/posts", newPost);
    request.subscribe(
      () => {

      }
    );
  }

  deletePost(id: number) {
    let request = this.httpClient.delete("http://localhost:3000/posts/" + id);
    request.subscribe(
      () => {

      }
    );

  }

  editPost(id: number, title: string, author: string) {
    let editedPost: Ipost =
    {
      id: id,
      title: title,
      author: author
    }

    let request = this.httpClient.put("http://localhost:3000/posts/" + id, editedPost);
    request.subscribe(() => { });

  }

}
