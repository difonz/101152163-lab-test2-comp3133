import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mission-details-card',
  templateUrl: './mission-details-card.component.html',
  styleUrls: ['./mission-details-card.component.css']
})
export class MissionDetailsCardComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
   // console.log(this.data);
  }

}
