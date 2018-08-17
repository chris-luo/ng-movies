import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav mat-tab-nav-bar>
      <a mat-tab-link
        *ngFor="let link of links"
        [routerLink]="link.path"
        routerLinkActive #rla="routerLinkActive"
        [active]="rla.isActive">
        {{link.label}}
      </a>
    </nav>
  `,
  styles: [``]
})
export class HeaderComponent implements OnInit {
  links = [{
    path: 'movies/popular',
    label: 'Popular Movies'
  }];
  constructor() { }

  ngOnInit(): void { }
}
