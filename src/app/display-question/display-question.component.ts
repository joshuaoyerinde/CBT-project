import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentdarshboardComponent } from '../studentdarshboard/studentdarshboard.component';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { RegisterStudentService } from '../services/register-student.service';
// import { LoginserviceService } from '../services/loginservice.service';
// import { viewClassName } from '@angular/compiler';
// import { empty } from 'rxjs';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css'],
  providers: [StudentdarshboardComponent]
})
export class DisplayQuestionComponent implements OnInit {
// public optionForm;

// tslint:disable-next-line: max-line-length
constructor(public fb: FormBuilder,  public stdidService: RegisterStudentService, public actrout: ActivatedRoute, public std: StudentdarshboardComponent, public displayservice: QuestionsService, private http: HttpClient) { }
public qid;
name;
public scorem = 0;
public scorep = 0;
// public bindings = 0;
check:string;
public filterOpt;  //fitering variable..
// public checkopt = [];
public ifEmptyQuset = false;
public savebtn = false;
public optionscheck = [];
public displayquestions = [];
public optionForm: FormGroup

stid = [];


ngOnInit() {
  this.optionForm = this.fb.group({});
  this.showQuestion();
  //  this.checkCorrectAnswer();
}
  showQuestion(){
    this.displayservice.displayQuestionToUsers().subscribe(v => {
      const view = v;
      this.displayquestions = view;
      console.log(this.displayquestions);

      this.qid = this.actrout.snapshot.params.qid;
      // console.log(this.qid)
      let thisquest = view.filter(s => s.courseId === this.qid);
      console.log(thisquest);
      this.displayquestions = thisquest;
      // console.log(this.displayquestions, "DIS QUES");
      let controlObj = {};
      this.displayquestions.map(questOpt => {
        controlObj[`y${questOpt.questions_id}`] = [''];
      });
      this.optionForm = this.fb.group(controlObj);
      this.displayquestions.map(questOpt => {
        this.optionForm.controls[`y${questOpt.questions_id}`].setValue("");
        console.log(questOpt.courseId);
      })
      console.log(this.optionForm.value,'Form control')

      if(thisquest == ''){
          console.log('empty');
          this.ifEmptyQuset = true;
          this.savebtn = false;
        } else {
          this.ifEmptyQuset =  false;
          this.savebtn = true;
          console.log("not empty");
        }
  });

  }
  // checkCorrectAnswer(qid) {
  //   // console.log(qid);
  //   this.displayservice.checkOption().subscribe(checked => {
  //     this.optionscheck = checked;
  //     console.log(this.optionscheck)
  //     this.filterOpt = checked.filter(s => s.questions_id === qid);
  //     this.filterOpt.forEach(element =>  {
  //         console.log(element);
  //         if (this.check !==  element.answer) {
  //           // this.score --;
  //           // this.scorem = 0;
  //           this.countDown();
  //           console.log(this.scorem);
  //           console.log(this.check);
  //           console.log('Wrong');
  //         } else {
  //            console.log(this.check);
  //            console.log('yes');
  //           //  this.binding ++;
  //            this.countUp();
  //            console.log(this.scorep);
  //         }
  //     });
  //   });
  // }
  // pression(w) {

  //   if(w !== w .answer){
  //       console.log(w.answer);
  //   } else {
  //     console.log(w);
  //   }

  // }
  saveScore() {
    let score = 0;
    let coursname ;
    let usersans = this.optionForm.value;
    console.log(usersans);
    let key = Object.keys(usersans);
    key.map(key => {
        let quest_id = key.split('y')[1];
        console.log(quest_id);
        let question =  this.displayquestions.filter(answer => answer.questions_id == quest_id);
        let correctAns = question[0].answer;
            coursname = question[0].course;
        localStorage.setItem('course',JSON.stringify(coursname));
        console.log(correctAns);
        if (correctAns == usersans[key]){
          score += 1;
        }else{
          score += 0;
        }
    });
    console.log(usersans);
    console.log(score,"users score")
    const  basepath = 'SchoolManag/';
    const  scoreUrl = basepath + 'savescore.php';
    // tslint:disable-next-line: align
    this.http.post(scoreUrl, {score: score, course:coursname}).subscribe(data => {
      console.log(data);
    });

  }
  countUp() {
    this.scorep ++;
  }
  countDown() {
     this.scorem = 0;
  }

}
