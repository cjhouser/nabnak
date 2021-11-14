import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  cards = [];

  constructor() { }

  ngOnInit(): void {
    // populate cards from backend
  }
}
