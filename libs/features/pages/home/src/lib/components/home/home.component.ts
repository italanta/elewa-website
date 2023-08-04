import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent 
{
  public myReferences= [{ 
    src: 'https://place-hold.it/500x300/red',
    actionUrl: 'https://www.google.com',
    isGray: false,
  },
  { 
    src: 'https://place-hold.it/500x300/red',
    actionUrl: 'https://www.amazon.com',
    isGray: true,
  }];
}
