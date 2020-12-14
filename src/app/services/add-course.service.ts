import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {
  basepath="SchoolManag/";
  addCourseUrl=this.basepath+"addcourse.php";
  // course diaplay
  displayCouse=this.basepath + "displaycoursename.php";
  deletecourse=this.basepath + "delete-course.php";
  constructor(public http: HttpClient) { }

  prepareCourse(course){
    return this.http.post(this.addCourseUrl,course);
  }
  displayCourseName(){
    return this.http.get<any>(this.displayCouse);
  }
  removeCourse(cid){
    return this.http.post(this.deletecourse, cid);
  }
}
