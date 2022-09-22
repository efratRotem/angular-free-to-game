import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'games-preview',
  templateUrl: './games-preview.component.html',
  styleUrls: ['./games-preview.component.scss']
})
export class GamesPreviewComponent implements OnInit {

  @Input() game!: Game

  constructor() { }

  ngOnInit(): void {
    console.log(this.game);
    
  }

}
