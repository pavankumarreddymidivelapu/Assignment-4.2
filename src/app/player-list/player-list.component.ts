import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  player: any[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.player = data;
    });
  }

  deletePlayer(id: string) {
    this.playerService.deletePlayer(id).subscribe(() => {
      this.loadPlayers();
    });
  }
}
