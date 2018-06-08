import { Injectable } from '@angular/core';
import { ApiGateway } from './apiGateway';

@Injectable()
export class IntervalListService {
  constructor(private apiGateway: ApiGateway) {}
  intervalListUrl: string = 'api/intervals';

  getIntervals() {
    return this.apiGateway.get(this.intervalListUrl);
  }
}
