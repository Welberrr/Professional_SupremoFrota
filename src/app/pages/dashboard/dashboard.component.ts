import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  imports: [CardModule],
  template: `
    <div class="card">
      <h2>Dashboard</h2>
      <div class="grid">
        <div class="col"><div class="card">Card 1</div></div>
        <div class="col"><div class="card">Card 2</div></div>
        <div class="col"><div class="card">Card 3</div></div>
      </div>
    </div>
  `
})
export class DashboardComponent {}
