import { Component, OnInit, InjectFlags, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AddCourseService } from '../services/add-course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-add-course',
  templateUrl: './dialog-add-course.component.html',
  styleUrls: ['./dialog-add-course.component.css']
})
export class DialogAddCourseComponent implements OnInit {
  public tutors;
  public course;
  // public cept=[]
  public getCourse = [];
 public  AddCourseForm
  // tslint:disable-next-line: max-line-length
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private form: FormBuilder, private snackbar: MatSnackBar, public addCourseService: AddCourseService, public dialog: MatDialogRef<AddCourseComponent>) { }



  ngOnInit() {
    // this.AddoFCourse();
    // this.include()
    this.AddCourseForm = this.form.group({
      tutors: ['', [Validators.required]],
      course: ['', [Validators.required]]
    });
  }

  add_course_tutors(){
    this.AddoFCourse()

  }
  AddoFCourse() {
    this.dialog.close(this.AddCourseForm.value);
  }

}
