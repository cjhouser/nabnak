import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id = '';
  title = 'default';

  constructor() {
    // id from backend
    // title from backend
  }

  ngOnInit(): void {
  }

  onDelete() {
    // send delete(this.id) to backend
    // remove card
  }
  
  onEnter(event: any) {
    // Blue the input box on enter release
    event.target.blur();
    this.title = event.target.value;
    //send a request to the backend
  }
}
