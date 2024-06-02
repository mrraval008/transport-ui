import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  public getUsers(): Observable<any> {
    const url = '/api/users?page=1';
    return this.http.get<any>(url);
}
public getAllShops(): Observable<any> {
  const url = '/api/v1/shops';
  return this.http.get<any>(url);
}
public addShops(body:any): Observable<any> {
  const url = '/api/v1/shops';
  return this.http.post<any>(url,body);
}
public getAllRecipts(): Observable<any> {
  const url = '/api/v1/recipts';
  return this.http.get<any>(url);
}
public createRecipt(body:any): Observable<any> {
  const url = '/api/v1/recipts';
  return this.http.post<any>(url,body);
}
}
