import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit {

  gameList: any[];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.showLoader();
    this.gamesService.getGameListFromAPI().subscribe(data => {
      this.gameList = data;
      this.gamesService.hideLoader();
    });
  }

}
