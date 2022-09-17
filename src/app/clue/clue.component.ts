import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.scss']
})
export class ClueComponent implements OnInit {
  clue: string;

  constructor() {
    this.clue = "لالمغربلبحث عن بلو بيرل بيتش في المغرب";
   }

  ngOnInit(): void {
  }

}
