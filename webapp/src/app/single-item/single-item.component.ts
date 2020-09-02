import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() data;
  @Output() redirctTo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  goToNextpage() {
    this.redirctTo.emit(this.data.id);
  }
}
