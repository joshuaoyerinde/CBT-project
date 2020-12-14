import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  basepath = 'SchoolManag/';
  addQuestionUrl = this.basepath + 'addquestion.php';

  // basepath="SchoolManag/";
  courseIdUrl = this.basepath + 'view-courseid.php';
  question_url = this.basepath + 'view-questions.php';
  updateQuestion_url = this.basepath + 'question-update.php';
  deleteQustUrl = this.basepath + 'delete-question.php';
  // variable for the student darshboord.........
  displayquestion = this.basepath + 'displayquest.php';
  checkanswer = this.basepath + 'correctoption.php';

  constructor(public http: HttpClient) { }
  readyQuestion(q) {
    return this.http.post(this.addQuestionUrl, q);
  }
  setCourseId() {
    return this.http.get<any>(this.courseIdUrl);
  }
  fetchQuestion() {
    return this.http.get<any>(this.question_url);
  }
  updateQuestion(e) {
    return this.http.post(this.updateQuestion_url, e);
  }
  deleteQest(id) {
    return this.http.post(this.deleteQustUrl, id);
  }

  // funtion for student end.........
  displayQuestionToUsers() {
    return this.http.get<any>(this.displayquestion);
  }
  checkOption() {
    return this.http.get<any>(this.checkanswer);
  }
}
