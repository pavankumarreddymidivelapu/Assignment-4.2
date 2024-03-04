import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-management',
  templateUrl: './player-management.component.html',
  styleUrls: ['./player-management.component.css']
})
export class PlayerManagementComponent implements OnInit {
  players: any[] = [];
  newPlayer: any = {};

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

  addPlayer(): void {
    this.playerService.addPlayer(this.newPlayer).subscribe(() => {
      this.loadPlayers();
      this.newPlayer = {};
    });
  }

  updatePlayer(id: string, player: any): void {
    this.playerService.updatePlayer(id, player).subscribe(() => {
      this.loadPlayers();
    });
  }

  deletePlayer(id: string): void {
    this.playerService.deletePlayer(id).subscribe(() => {
      this.loadPlayers();
    });
  }

  // Implement methods for your 5 queries
}
