import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from './question-service.service';
var a = require("./example_2.json");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionServiceService]
})
export class AppComponent implements OnInit {
  title = 'questions-angular';
  typeOfQuiz: any;
  stQuiz:Boolean=false;
  type:Boolean=true;
  Questions:any;
  options: any;
  constructor(
    private appSettingsService: QuestionServiceService
  ) {
    console.log(a.quiz);
    this.typeOfQuiz = Object.keys(a.quiz);
  }

  ngOnInit() {

  }
  nextQuiz(value){
    console.log(value);
    
  }
  startQuiz(value){
    console.log(value);
    if(value){
      this.stQuiz=true;
      this.type=false;
      this.typeOfQuiz.filter(type=>{
        if(type===value){
          this.Questions=Object.values(a.quiz[type]);
          console.log(this.Questions);
          this.Questions.filter(options=>{
            console.log(options.options);
            this.options=options.options;
          })
        }
        
      });
      //this.questions = Object.keys(a.quiz);
    }
  }
}
