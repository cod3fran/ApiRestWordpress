import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {


  baseUrl = 'http://localhost/wordpress/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for utilisateur consumption
      //  this.log(`${operation} failed: ${error.message}`, 'Error');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPosts(): Observable<any[]> {
    // this.log('HeroService: fetched heroes');
    return this.http.get<any[]>(this.baseUrl + '/posts', {
      params: {
        per_page: '3'
      }
    })
      .pipe(
        tap(util => { }),
        catchError(this.handleError('getPosts', []))
      );
  }

  getMediaById(id: number): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + '/media/' + id)
      .pipe(
        tap(util => { }),
        catchError(this.handleError('getMedia id ' + id, []))
      );
  }

  getCommentByPost(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/comments?post=' + id)
      .pipe(
        tap(util => { }),
        catchError(this.handleError('getMedia id ' + id, []))
      );
  }

}
