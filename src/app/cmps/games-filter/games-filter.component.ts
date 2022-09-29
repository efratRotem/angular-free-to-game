import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameFilter } from 'src/app/models/game-filter.model';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.scss']
})
export class GamesFilterComponent implements OnInit, OnDestroy {

  constructor(
    private gameService: GameService
  ) { }

  filterBy!: GameFilter
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.gameService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  onChangeFilter() {
    console.log(this.filterBy);
    this.gameService.setFilterBy(this.filterBy)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
