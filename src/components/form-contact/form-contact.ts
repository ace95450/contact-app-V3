import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from "../../shared/models/article";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'form-contact',
  templateUrl: 'form-contact.html'
})
export class FormContactComponent implements OnInit{
  formContact: FormGroup;
  @Output() newArticleEvent = new EventEmitter();
  newArticle: Article = new Article();

  constructor(private formBuilder: FormBuilder ) {}

  ngOnInit(){
    this.submitArticle();
  }

  submitArticle(){
    console.log(this.newArticle);
    this.newArticle.id = Date.now();
    this.newArticleEvent.emit(this.newArticle);
    this.newArticle = new Article();
  }

}
