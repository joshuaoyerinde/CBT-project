import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { QuestionsService } from '../services/questions.service';
// import { RegisterStudentListComponent } from '../register-student-list/register-student-list.component';
import { RegisterStudentService } from '../services/register-student.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public countQuestion;
  public countStudent;
  public totalCourse;


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  constructor(private _formBuilder: FormBuilder, private questService: QuestionsService, private registerService:RegisterStudentService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.showTotalQuestion();
    this.getTotalNumberOfStud();
    this.countCouseName();
}
showTotalQuestion() {
  this.questService.fetchQuestion().subscribe(res => {
    // console.log(res, "s")
    // let v = res.count;
    // this.countQuestion = JSON.parse(JSON.stringify(v));
    this.countQuestion = res.count[0];
    // this.countQuestion = [0];
    console.log(this.countQuestion);
  });
}
getTotalNumberOfStud(){
  this.registerService.registerStudent().subscribe(list => {
    let totalstud = list.totalstudent[0];
    this.countStudent = totalstud;
    console.log(this.countStudent);
  });
}
countCouseName() {
  this.questService.setCourseId().subscribe(s => {
    this.totalCourse = s.totalCourse[0];
    console.log(this.totalCourse);
  });
}


}




