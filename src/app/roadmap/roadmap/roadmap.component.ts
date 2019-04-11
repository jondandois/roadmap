import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
  tasks: Task[];
  roadMapDates = {
    minDate: new Date("2/1/2019"),
    maxDate: new Date("6/1/2019"),
    nDays: 0,
    nWeeks: 0,
    rowCount: 1
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

  buildCalendar(): void {
    const diffTime = this.roadMapDates.maxDate.getTime() - this.roadMapDates.minDate.getTime();
    const nDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    const nWeeks = nDays / 7;
    this.roadMapDates.nDays = nDays;
    this.roadMapDates.nWeeks = nWeeks;
    console.log('N Days: ' + nWeeks)
  }
}
