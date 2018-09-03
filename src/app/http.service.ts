import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baserUrl ='http://starlord.hackerearth.com/movieslisting';

  constructor(private _http: HttpClient) { }

  public getMovies = () => {
    return this._http.get(this.baserUrl);
  }

  private handleError = (err: HttpErrorResponse) => {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    } // end condition *if
    console.error(errorMessage);
    return Observable.throw(errorMessage);

  }


}
