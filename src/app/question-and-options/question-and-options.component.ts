import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { QueryValueType } from '@angular/compiler/src/core';
import { QuestionsDialogComponent } from '../questions-dialog/questions-dialog.component';
import { QuestionsService } from '../services/questions.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question-and-options',
  templateUrl: './question-and-options.component.html',
  styleUrls: ['./question-and-options.component.css']
})
export class QuestionAndOptionsComponent implements OnInit {
  // public option1;
  // public option2;
  // public option3;
  // public option4;
  // public question;
  // public selectcourse;
  public filterQuest = "";
  public getQustion = [];

  constructor(public dialogbox: MatDialog, public qestService: QuestionsService, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.ShowQuestion();
  }
  ShowQuestion() {
    this.qestService.fetchQuestion().subscribe(res => {
      // console.log(res, "RES")
      this.getQustion = res.result;

      // console.log(this.getQustion);
    });
  }
  addQuestion(){
    const dialogRef = this.dialogbox.open(QuestionsDialogComponent, {data: ''});

    dialogRef.afterClosed().subscribe(result => {
      if (typeof(result) === undefined) {
        console.log(result);
      } else {
        const acceptQuestion = result;
        console.log(acceptQuestion);
        this.qestService.readyQuestion(acceptQuestion).subscribe(r => {
          const std = r;
          this.ShowQuestion();
        });
        // this.removeQest();
      }
    });
  }
  editQuestions(question) {
    let editDialog = this.dialogbox.open(QuestionsDialogComponent, {data: question});
    // console.log(editDialog);
    editDialog.afterClosed().subscribe(res => {
      if(typeof(res) === undefined){
      }else{
        let update = res;
        this.qestService.updateQuestion(update).subscribe(l => {
          // console.log(l);
          this.ShowQuestion();
        });
      }
    });
  }
  removeQest(value) {
    this.qestService.deleteQest(value).subscribe(re => {
      console.log(re);
      this.ShowQuestion();
      let snackbaref = this.snackbar.open('one question is removed', 'Dismiss', {
          duration: 2000,
      });
    });
  }
}
