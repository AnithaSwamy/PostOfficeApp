import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';
import { POffice } from '../shared/postoffice';

@Injectable({
  providedIn: 'root'
})

export class PincodeService {

  private baseURL: string = "https://api.postalpincode.in/"

  constructor(private http: HttpClient) { }

  getPostOfcByCode(pincode: any): any {
    return this.http.get<POffice>(this.baseURL + 'pincode/' + pincode)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  getPostOfcByLocation(pincode: any): any {
    return this.http.get<POffice>(this.baseURL + 'postoffice/' + pincode)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
