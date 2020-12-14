import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

// import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionAndOptionsComponent } from '../question-and-options/question-and-options.component';
import { QuestionsService } from '../services/questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-dialog',
  templateUrl: './questions-dialog.component.html',
  styleUrls: ['./questions-dialog.component.css']
})
export class QuestionsDialogComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data, public form: FormBuilder, public actRout: ActivatedRoute, public Qservice: QuestionsService, public dialog: MatDialogRef<QuestionAndOptionsComponent>) { }

public question;
public selectcourse;
public id = [];
// public Question_option;
public questionId;
public qToEdit;
public x = [];  //for question id----
public formQuestions;


  ngOnInit() {
    this.question = this.data;
    this.getCourseId();

    this.formQuestions = this.form.group({
        qid: [this.question.questions_id, Validators.required],
        question: [this.question.question, [Validators.required]],
        option1: [this.question.option_1, Validators.required],
        option2: [this.question.option_2, Validators.required],
        option3: [this.question.option_3, Validators.required],
        option4: [this.question.option_4, Validators.required],
        correctanswer: [this.question.answer, Validators.required],
        selectcourse: [this.question.course, [Validators.required]]
    });
      // this.Qservice.fetchQuestion().subscribe(s => {
    //   let viewQest = s;
    //   this.Question_option = s;
    //   console.log(this.Question_option);

    //   this.questionId = this.actRout.snapshot.params.id;
    //   let thisQuestion = viewQest.filter(m => m.id == this.questionId);
    //   this.Question_option = thisQuestion[0];
    //   console.log(thisQuestion);
    // });
    // this.ShowQuestion();
  }

  // function for the selection of course and the course_id
  getCourseId() {
    this.Qservice.setCourseId().subscribe(s => {
      this.id = s.getcourseid;
      console.log(this.id);
    });
  }
  submitForm() {
    this.dialog.close(this.formQuestions.value);
  }
  // testing(){

  // }
}
