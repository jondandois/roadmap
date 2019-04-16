import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task.service';
import * as moment from 'moment';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
})
export class RoadmapComponent implements OnInit {
  tasks: Task[];
  roadMapDates = {
    minDate: new Date("2/1/2019"),
    maxDate: new Date("10/31/2019"),
    dateColumns: [],
    nDays: 0,
    nWeeks: 0,
    rowCount: 1,
    nCols: 0
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
    this.buildCalendar();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  enumerateDaysBetweenDates(startDate, endDate): Date[] {
    let dates = [];
    let currDate = startDate.startOf('week');
    let lastDate = endDate.startOf('week');
    while(currDate.add(1, 'week').diff(lastDate) < 0) {
      dates.push(currDate.clone().toDate())
    }
    return dates;
  }

  buildCalendar(): void {
    let startDate = moment(this.roadMapDates.minDate);
    let endDate = moment(this.roadMapDates.maxDate);
    this.roadMapDates.nDays = endDate.diff(startDate, 'days');
    this.roadMapDates.nWeeks = endDate.diff(startDate, 'weeks');
    this.roadMapDates.dateColumns = this.enumerateDaysBetweenDates(startDate, endDate);
    this.roadMapDates.nCols = this.roadMapDates.dateColumns.length
  }
}
