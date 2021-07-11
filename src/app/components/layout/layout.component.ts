import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    hr {
      background-color: #fff;
      max-width: 65px !important;
      height: 6px !important;
      opacity: 1 !important;
      margin: auto;
    }
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
