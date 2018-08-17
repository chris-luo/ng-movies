import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav mat-tab-nav-bar>
      <a mat-tab-link
        [matMenuTriggerFor]="menuMovies"
        [routerLink]="movies"
        routerLinkActive #rla="routerLinkActive"
        [active]="rla.isActive">
        Movies
      </a>
      <a mat-tab-link
        [matMenuTriggerFor]="menuTV"
        [routerLink]="movies"
        routerLinkActive #rla="routerLinkActive"
        [active]="rla.isActive">
        TV Shows
      </a>
    </nav>

    <mat-menu #menuMovies="matMenu">
      <button mat-menu-item *ngFor="let item of menuItemsMovie" (click)="onMenuItem(item)">{{ item.label }}</button>
    </mat-menu>

    <mat-menu #menuTV="matMenu">
      <button mat-menu-item *ngFor="let item of menuItemsTV" (click)="onMenuItem(item)">{{ item.label }}</button>
    </mat-menu>
  `,
  styles: [``]
})
export class HeaderComponent implements OnInit {

  menuItemsMovie = [
    {
      path: 'movies/popular',
      label: 'Popular'
    },
    {
      path: 'movies/top-rated',
      label: 'Top Rated'
    },
    {
      path: 'movies/upcoming',
      label: 'Upcoming'
    },
    {
      path: 'movies/now-playing',
      label: 'Now Playing'
    }
  ];

  menuItemsTV = [
    {
      path: 'tv/popular',
      label: 'Popular'
    },
    {
      path: 'tv/top-rated',
      label: 'Top Rated'
    },
    {
      path: 'tv/on-tv',
      label: 'On TV'
    },
    {
      path: 'tv/airing-today',
      label: 'Airing Today'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onMenuItem(item) {
    this.router.navigate([item.path]);
  }
}
