import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {

    // Calculate total pages  12/10 = 2
    let totalPages = Math.ceil(totalItems / pageSize);  //returns the smallest integer greater than or equal to the given number

    // ensure that this do not fall out of bounds/pages
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    // start and end page
    let startPage: number;
    let endPage: number;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // if more that 10 pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end indexitems
    let startIndex = (currentPage - 1) * pageSize;
    //returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one
    let endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));

    // create and array of pages
    // Array.from()-->creates a new, shallow-copied Array instance from an array-like or iterable object.
    // Array.keys()-->returns a new Array Iterator object that contains the keys for each ; eg.. 0, 1, 2, 3
    // array.map() --> creates a new array with the results of calling a provided function on every element in the calling array.
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}