import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-car',
  templateUrl: './gifs-car.component.html',
  styleUrl: './gifs-car.component.css'
})
export class GifsCarComponent implements OnInit {

  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }

}
