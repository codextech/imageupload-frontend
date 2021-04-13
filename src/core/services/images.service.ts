import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}


  getImages(params = {}) {
    return this.http.get(`${environment.apiUrl}/images`, {params : params}).pipe(
      map((res: any) => {
      return res.data;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );

  }

  removeOldImages(params = {}) {
    return this.http.delete(`${environment.apiUrl}/images`, {params : params}).pipe(
      map((res: any) => {
      return res.data;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );

  }


  uploadFile(data : any) {
    return this.http.post(`${environment.apiUrl}/images`, data, {}).pipe(
      map((res: any) => {
      return res.data;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );;
  }


}
