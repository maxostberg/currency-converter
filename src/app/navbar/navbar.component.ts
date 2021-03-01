import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  
  trigger,
  state,
  style,
  animate,
  transition,
  AUTO_STYLE, } from '@angular/animations'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ 
        height: AUTO_STYLE, 
        visibility: AUTO_STYLE
        
      })),
      state('true', style({ 
        height: '0', 
        visibility: 'hidden',
      })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('500ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.isOpen = !this.isOpen;
  }

}
