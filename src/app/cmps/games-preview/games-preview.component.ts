import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'games-preview',
  templateUrl: './games-preview.component.html',
  styleUrls: ['./games-preview.component.scss']
})
export class GamesPreviewComponent implements OnInit {

  @Input() game!: Game

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToDetails() {
    console.log('Going to details');
    this.router.navigateByUrl('/game/' + this.game.id)
  }
}
