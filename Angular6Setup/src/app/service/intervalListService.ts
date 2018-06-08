import { Injectable } from '@angular/core';
import { ApiGateway } from './apiGateway';

@Injectable()
export class IntervalListService {
  constructor(private apiGateway: ApiGateway) {}
  intervalListUrl: string = `api/intervals/${window["voyageId"]}/${window["legNumber"]}`;

  getIntervals() {
    console.log('${window["legNumber"]}', window["legNumber"]);
    return this.apiGateway.get(this.intervalListUrl);
  }
}
