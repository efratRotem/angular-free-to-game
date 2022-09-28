import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.scss']
})
export class GamesDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  game!: Game

  ngOnInit(): void {
    console.log('In details');
    this.route.params.subscribe(async params => {
      const game = await lastValueFrom(this.gameService.getById(params['id']))

      if (game) this.game = game
    })

  }

}
