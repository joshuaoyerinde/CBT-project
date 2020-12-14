import { AddCourseService } from './../services/add-course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-studentexampanel',
  templateUrl: './studentexampanel.component.html',
  styleUrls: ['./studentexampanel.component.css']
})
export class StudentexampanelComponent implements OnInit {
  public quest = [];
  done = false
  clicked = false;
  qq=[];
  // checked = false;
  public checksubject: FormGroup;
  constructor(private rout: Router, private displayCourseService: AddCourseService, public fg:FormBuilder) { }

  ngOnInit() {
    this.listQuestion();
    // console.log(this.checked);
    this.checksubject = this.fg.group({});
  }
  listQuestion() {
    // return of (this.seasons);
    this.displayCourseService.displayCourseName().subscribe(data => {
      this.quest = data;
      console.log(this.quest);
      if(data == ''){
        // console.log("empty");
      }
      let controlcheck = {};
      this.quest.map(check =>{
        controlcheck[`u${check.course_id}`] = [''];
        // console.log(c);
      });
      this.checksubject = this.fg.group(controlcheck);
      this.quest.map(check => {
        this.checksubject.controls[`u${check.course_id}`].setValue("");
        // console.log(check.course_id);
      });
      console.log(this.checksubject.value,"couse value")
    });
  }
  cc(){
    let show = this.checksubject.value
    let key = Object.keys(show);

    console.log(show);
  }
  questDiaplayFunction() {
    if (this.checksubject.value == true){
      console.log('oya na', this.done)
      this.done = true;
    }else{
      console.log('nooooooo')
    }
    // this.clicked = false;
    // this.done = true;

    // this.displayCourseService.displayCourseName().subscribe(data =>{
    //  this.quest = data;

    //  console.log(quest_id);
      // let filterId =data.filter(a => a.course_id == quest_id);
      // console.log(filterId)
      // if(!filterId){
      //     this.done=false;
      // }else{
      //   this.done=true
      // }
      // this.quest.forEach(element => {
      //   if( quest_id == element.course_id){
      //     console.log(quest_id);
      //     this.done = true
      //   }else{
      //     this.done = false
      //   }

      // });
      // if (filterId) {
      //   this.done = true;
      //   // this.clicked = false;
      // }
      // else{
      //   console.log('joshua')
      // }

    // })

    console.log("yes")


    // this.rout.navigate(['/studentProfile/display-question/' + quest_id ]);

    // alert(quest_id);
  }

}
