import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AboutComponent } from './components/about/about.component';
import { PlansComponent } from './components/plans/plans.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    CardListComponent,
    AboutComponent,
    PlansComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'health-wellnes';
}
