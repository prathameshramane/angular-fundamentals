import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isActive = false;
  @Output() change = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  toggleIsActive() {
    this.isActive = !this.isActive;
    this.change.emit({ newValue: this.isActive });
  }

}
