import { Component, OnInit, Input } from '@angular/core';
import { DaysOfWeek } from '../Classes/DaysOfWeeks';

@Component({
  selector: 'app-days-of-week',
  templateUrl: './days-of-week.component.html',
  styleUrls: ['./days-of-week.component.css']
})
export class DaysOfWeekComponent implements OnInit {
  @Input()
  dayOfweek:DaysOfWeek;

  constructor() { }

  ngOnInit() {
  }

}
