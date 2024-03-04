import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerName: string;

  constructor(private playerService: PlayerService) {
    this.playerName = '';
  }

  ngOnInit() {
  }

  addPlayer() {
    if (this.playerName) {
      this.playerService.addPlayer({ name: this.playerName }).subscribe(() => {
        // Optionally, you can navigate to the player list or perform any other action.
      });
    }
  }
}
