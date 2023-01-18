import { Component, OnInit } from '@angular/core';
import quiz_questions from '../../../assets/data/quiz_questions.json'
@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  questions:any
  questionSelected:any
  answers:any[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  initializerA:number = 0
  initializerB:number = 0
  ResultA:string = ''
  ResultB:string = ''
  finished:boolean = false
FinalResult:string = ''
  constructor() {
   }

  ngOnInit(): void {
    if(quiz_questions){
      this.finished = false
this.questions = quiz_questions.questions
this.questionSelected = this.questions[this.questionIndex]

this.questionIndex = 0
this.questionMaxIndex = this.questions.length
this.ResultA = quiz_questions.results.A
this.ResultB = quiz_questions.results.B

    }
  }
  playerChoice(value:string){
    this.answers.push(value)
    console.log(this.answers)
    this.nextStep()

  }
 nextStep(){
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
this.finished = true
this.checkResult()
    }
  }
checkResult(){

for(let i = 0; i < this.answers.length; i++){
  if(this.answers[i] == 'A'){
      this.initializerA += 1
  }else{
    this.initializerB += 1
  }
  if(this.initializerA > this.initializerB){
   this.FinalResult = this.ResultA
  }else{
   this.FinalResult = this.ResultB
  }
}
}
}
