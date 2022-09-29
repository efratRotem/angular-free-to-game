import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamesListComponent } from './cmps/games-list/games-list.component';
import { GamesPreviewComponent } from './cmps/games-preview/games-preview.component';
import { GamesDetailsComponent } from './pages/games-details/games-details.component';
import { GamesFilterComponent } from './cmps/games-filter/games-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    GamesListComponent,
    GamesPreviewComponent,
    GamesDetailsComponent,
    GamesFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
