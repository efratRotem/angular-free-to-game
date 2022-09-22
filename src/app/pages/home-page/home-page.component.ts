import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  games!: Game[] | any

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames()
    console.log(this.games);
    
  }

}
