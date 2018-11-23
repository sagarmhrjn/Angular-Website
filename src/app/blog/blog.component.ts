import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any = {};
  allItems: any[];  // gets all of the posts item
  pages: any[]; // store as an array so that we can iterate over it
  pageSize = 5;

  pager: any = {};    // we are going to get response

  constructor(private config: ConfigService, private pagerService: PagerService) { }

  ngOnInit() {
    this.blog = this.getBlog();
    this.allItems = this.blog.posts;    // get all of the posts items
    this.setPage(1);
  }

  getBlog() {
    return this.config.getConfig().blog
  }

  setPage(pageNumber: number) {
    // create a page using paging service
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);

    // return current page posts
    //prototype.slice(): returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). 
    //The original array will not be modified.
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex);

  }
}
