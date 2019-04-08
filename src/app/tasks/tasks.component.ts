import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Task = {
    id: 1,
    title: 'Populate Space Numbers',
    start: new Date('3/1/2019'),
    end: new Date('5/1/2019'),
    tags: ['space_numbering', 'gis', 'floorplans'],
    description: 'Add space numbers to all room polygons'
  }

  constructor() { }

  ngOnInit() {
  }

}
