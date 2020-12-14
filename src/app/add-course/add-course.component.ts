import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogAddCourseComponent } from '../dialog-add-course/dialog-add-course.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCourseService } from '../services/add-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  // providers:[MsgboxCourseComponent]
})
export class AddCourseComponent implements OnInit {
  public displayCourse = [];
  constructor(private dialog:MatDialog, public SnackBar: MatSnackBar, public addCourseService: AddCourseService, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.displayCouseAndTutors();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddCourseComponent, {data: ''});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if ( result === undefined) {

      } else {
        const accept = result;
        console.log(accept);
        this.addCourseService.prepareCourse(accept).subscribe(s => {
        console.log(s);
        this.displayCouseAndTutors();
        });
        let snackbaref = this.snackbar.open('Added Successfully', 'Dismiss', {
        duration: 2000,
      });
      }
    });

  }
  displayCouseAndTutors() {
    this.addCourseService.displayCourseName().subscribe(v => {
      this.displayCourse = v;
      // console.log(this.displayCourse);
    });
  }
  deleteQuestion(value){
    this.addCourseService.removeCourse({course_id: value}).subscribe(v => {
      // console.log(v);
      this.displayCouseAndTutors();
    });
  }

}
