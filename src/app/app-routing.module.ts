import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesDetailsComponent } from './pages/games-details/games-details.component';

const routes: Routes = [
  {
    path: 'game/:id',
    component: GamesDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
