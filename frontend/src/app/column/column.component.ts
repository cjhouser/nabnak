import { Component } from '@angular/core';
import { Stage } from '../models/stage.model';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  // Indefinite assignment here when parent is done appropriate
  stage: Stage = new Stage(); 

  updateStage(event: any) {
    this.stage.title = event.target.value;
    event.target.blur();
  }

  deleteStage() {
    console.log("delete stage", this.stage.id)
  }

  updateTaskOrder() {
    console.log("update task in stage", this.stage.id)
  }

  createTask() {
    this.stage.tasks.push(new Task());
    console.log("new task", this.stage.tasks[this.stage.tasks.length - 1].id)
  }

  onTaskDeleted(target: Task) {
    let index: number = this.stage.tasks.findIndex(task => task.id == target.id);
    if (index > -1) {
      console.log("delete task", target.id, "in stage", this.stage.id, index)
      this.stage.tasks.splice(index, 1);
    }
  }
}
