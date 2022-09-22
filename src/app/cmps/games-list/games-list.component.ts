import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  constructor(private gameService: GameService) { }

  @Input() games!: Game[]

  ngOnInit(): void {
       
  }

}
