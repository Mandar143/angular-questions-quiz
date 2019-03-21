import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from './question-service.service';
var a=require("./example_2.json");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[QuestionServiceService]
})
export class AppComponent implements OnInit  {
  title = 'questions-angular';
  
  constructor(
    private appSettingsService : QuestionServiceService 
) { 
  console.log(a);
  
}

ngOnInit(){
 
}   
}
