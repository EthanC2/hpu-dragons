import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss']
})
export class LevelSelectComponent implements OnInit {
  destinations: string[];

  constructor() {
    this.destinations = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10"
    ]
   }

  ngOnInit(): void {
  }

}
