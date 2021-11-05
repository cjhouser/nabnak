import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id = '';
  title = '';

  constructor() {
    // id from backend
    // title from backend
  }

  ngOnInit(): void {
  }

  onDelete() {
    // send delete(this.id) to backend
    // remove card from view 
  }
}
