import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  games!: Game[] | any
  games$!: Observable<Game[]>
  subscription!: Subscription

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames()
    this.games$=this.gameService.games$
    // this.gameService.getGames().subscribe((res: any) => {
    //   console.log(res.values);

    // })

  }

}
