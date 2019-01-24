import { Component } from '@angular/core';
import {SportInfoPage} from "../../pages/sport-info/sport-info";
import {NavController} from "ionic-angular";

/**
 * Generated class for the SingleContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'single-contact',
  templateUrl: 'single-contact.html'
})
export class SingleContactComponent {

  constructor(public navCtrl: NavController) {}

  goToElement(){
    this.navCtrl.push(SportInfoPage);
  }

}
