import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:  [ ItemsService ]
})
export class DisplayComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

}
