import { Component } from '@angular/core';

/**
 * Generated class for the ListContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-contact',
  templateUrl: 'list-contact.html'
})
export class ListContactComponent {

  text: string;

  constructor() {
    console.log('Hello ListContactComponent Component');
    this.text = 'Hello World';
  }

}
