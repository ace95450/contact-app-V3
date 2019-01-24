import { NgModule } from '@angular/core';
import { SingleContactComponent } from './single-contact/single-contact';
import { FormContactComponent } from './form-contact/form-contact';
import { ListContactComponent } from './list-contact/list-contact';
import {SportInfoPageModule} from "../pages/sport-info/sport-info.module";
import {SportInfoPage} from "../pages/sport-info/sport-info";
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";


@NgModule({
	declarations: [
	  SingleContactComponent,
    FormContactComponent,
    ListContactComponent
  ],
	imports: [
    SportInfoPageModule,
    SportInfoPage,
    FormsModule,
    FormBuilder,
    FormGroup
  ],
	exports: [
	  SingleContactComponent,
    FormContactComponent,
    ListContactComponent
  ]
})
export class ComponentsModule {}
