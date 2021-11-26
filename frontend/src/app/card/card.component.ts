import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter<Task>();

  delete() {
    console.log(this.task.id, this.task.title);
    this.taskDeleted.emit(this.task);
  }
  
  update(event: any) {
    console.log("update task");
    this.task.title = event.target.value;
    event.target.blur();
  }
}
