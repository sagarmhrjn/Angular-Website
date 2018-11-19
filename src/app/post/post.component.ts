import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  // the parent component should provide details for this post
  post: any;
  constructor() { }

  ngOnInit() {
  }

}
