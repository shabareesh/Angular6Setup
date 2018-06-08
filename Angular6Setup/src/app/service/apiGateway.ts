import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config/apiConfig';

@Injectable()
export class ApiGateway {

  constructor(private http: HttpClient) { }

  get(endpoint) {
    const url: string = `${API_URL}/${endpoint}`;
     return this.http.get(url);
  }

  post(endpoint, body) {
    const url: string = `${API_URL}/${endpoint}`;
    return this.http.post(url, body);
  }
}
