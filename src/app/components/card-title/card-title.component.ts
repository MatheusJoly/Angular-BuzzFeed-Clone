import { Component, OnInit } from '@angular/core';
import quiz_questions from '../../../assets/data/quiz_questions.json'

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
  title:string = ''
  constructor() { }

  ngOnInit(): void {
    if(quiz_questions){
      this.title = quiz_questions.title

    }
  }

}
