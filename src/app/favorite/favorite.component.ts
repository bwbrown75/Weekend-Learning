import { HttpClient, } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FruitService } from '../fruit.service';
import { Ipost } from '../customTypes';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  favFruit: string = 'no fave';
  favSubscription: Subscription;

  title: string = "";
  author: string = "";
  posts: Ipost[] = []
  deleteID: number = 0;
  editID: number = 0;
  titleEdit: string = "";
  authorEdit: string = "";


  constructor(public frService: FruitService, private httpClient: HttpClient) {

    this.favSubscription = frService.$favFruit.subscribe(
      (newFruit: string) => { this.favFruit = newFruit }
    )

    this.frService.$posts.subscribe(
      (newPosts: Ipost[]) => {
        this.posts = newPosts;
      }
    );
    frService.getPosts();
  }

  editPost() {
    //note: This could cause an error, because GetPosts isn't waiting for EditPost to finish
    this.frService.editPost(this.editID, this.titleEdit, this.authorEdit);
    this.frService.getPosts();
  }
  submitPost() {
    //note: This could cause an error, because GetPosts isn't waiting for CreatePost to finish
    this.frService.createPost(this.title, this.author)
    this.frService.getPosts();
  }

  deletePost() {
    //note: This could cause an error, because GetPosts isn't waiting for DeletePost to finish
    this.frService.deletePost(this.deleteID);
    this.frService.getPosts();
  }

}



