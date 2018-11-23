import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'api/users';   //users is our db name


  //  handleError() method reports the error and then returns an innocuous result so that the application keeps working
  // Instead of handling the error directly, it returns an error handler function to catchError that it has configured  with both
  // the name of the operation that failed and a safe return value.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http: HttpClient, private router: Router) { }

  signup(formData: NgForm) {
    // making a post request
    return this.http.post<any>(`${this.apiUrl}/signup`, formData)
      // link operators together. Pipes let you combine multiple functions into a single function. 
      // The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, 
      // runs the composed functions in sequence..
      .pipe(
        // do/tap: transparrantly perform action orside-effects, such as logging
        tap(user => {
          console.log(user);
        }),
        //  catchError() operator intercepts an Observable that failed. 
        // It passes the error an error handler that can do what it wants with the error.
        catchError(this.handleError('getHeroes', []))
      );
  }

  login(formData: NgForm) {
    // making a post request
    return this.http.post<any>(`${this.apiUrl}/login`, formData)
      // link operators together. Pipes let you combine multiple functions into a single function. 
      // The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, 
      // runs the composed functions in sequence..
      .pipe(
        // do/tap: transparrantly perform action orside-effects, such as logging
        tap(user => {
          console.log(user);
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }),
        //  catchError() operator intercepts an Observable that failed. 
        // It passes the error an error handler that can do what it wants with the error.
        catchError(this.handleError('getHeroes', []))
      );
  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/home']);
    }
  }

}
