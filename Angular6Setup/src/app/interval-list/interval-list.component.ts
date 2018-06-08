import { Component, OnInit } from '@angular/core';
import { IntervalListService } from '../service/intervalListService';
import { IntervalList } from '../model/intervalList.model';

@Component({
  selector: 'app-interval-list',
  templateUrl: './interval-list.component.html',
  styleUrls: ['./interval-list.component.scss']
})
export class IntervalListComponent implements OnInit {

  intervalList: IntervalList[];

  constructor(private intervalListService: IntervalListService) { }

  ngOnInit() {
    this.intervalListService.getIntervals()
      .subscribe((data: IntervalList[]) => {
        this.intervalList = data;
      })
  }
}
