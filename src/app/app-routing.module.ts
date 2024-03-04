import { NgModule } from '@angular/core';
import { PlayerManagementComponent } from './player-management/player-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'players', component: PlayerManagementComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
