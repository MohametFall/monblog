import { Component } from '@angular/core';
import { Post } from '../model/post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MON BLOG'
  arrayOfPost : Post[] = [
    {
      title:'Mon premier Post',
      content : 'Ceci est un premier post dans le blog construit dans une application angular',
      loveIts : 0,
      created_at: new Date()

    },
    {
      title:'Mon deuxième Post',
      content : 'Ceci est un deuxième post dans le blog construit dans une application angular',
      loveIts : 0,
      created_at: new Date()

    },
    {
      title:'Mon troisième Post',
      content : 'Ceci est un troisième post dans le blog construit dans une application angular',
      loveIts : 0,
      created_at: new Date()

    },
    {
      title:'Mon quatrième Post',
      content : 'Ceci est un quatrième post dans le blog construit dans une application angular',
      loveIts : 0,
      created_at: new Date()

    },
  ]

}
 