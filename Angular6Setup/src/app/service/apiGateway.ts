import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URL } from '../../config/apiConfig';

const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': window["eov_cookie"],
  })
};

const test = window["eov_cookie"];

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Autherization', test);

@Injectable()
export class ApiGateway {

  constructor(private http: HttpClient) { }

  get(endpoint) {
    const url: string = `${API_URL}/${endpoint}`;
    return this.http.get(url, { headers });
  }

  post(endpoint, body) {
    const url: string = `${API_URL}/${endpoint}`;
    return this.http.post(url, body, { headers });
  }
}
