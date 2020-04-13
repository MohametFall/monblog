import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post
  nbLove : number = 0
  nbDontLove : number = 0
  constructor() { }

  ngOnInit(): void {
  }

  onAimer(){
    this.post.loveIts = 1
    this.nbLove++
    console.log("On aime !!! " +this.nbLove)
  }
  onPasAimer(){
    this.post.loveIts  = -1
    this.nbDontLove++ 
    console.log("J'aime pas !!! "+this.nbDontLove)

  }
}
