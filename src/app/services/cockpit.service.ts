import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CockpitService {

  baseUrl = 'http://localhost/cockpit/api';

  token = '?token=5270df41f629060b9269bed279ef96';
  // Doit être utilisé à chaque appel à l'API, on peut utiliser différents tokens pour différents utilisateurs
  // le token permet de déterminer quelles routes sont authorized dans l'api

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

  getCollections(): Observable<any[]> {
    // Renvoie un array contenant les noms de toutes les collections définies
    return this.http.get<any[]>(this.baseUrl + '/collections/listCollections' + this.token)
      .pipe(
        tap(util => { }),
        catchError(this.handleError('getCollections', []))
      );
  }

  getEntriesByCollection(collection: string): Observable<any> {
    // Renvoie la liste des entrées correspondant à la collection passée en paramètre
    return this.http.get<any>(this.baseUrl + '/collections/get/' + collection + this.token)
      .pipe(
        tap(util => { }),
        catchError(this.handleError('getCollections', []))
      );
  }
}
