import { StudentexampanelComponent } from './studentexampanel/studentexampanel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SignupComponent } from './signup/signup.component';
import { Error404Component } from './error404/error404.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DialogAddCourseComponent } from './dialog-add-course/dialog-add-course.component';
import { RegisterStudentListComponent } from './register-student-list/register-student-list.component';
import { QuestionAndOptionsComponent } from './question-and-options/question-and-options.component';
import { QuestionsDialogComponent } from './questions-dialog/questions-dialog.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentdarshboardComponent } from './studentdarshboard/studentdarshboard.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
// import { LoginGuard } from './login.guard';
// import { LoginUsersGuard } from './login-users.guard';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'dialogCourse', component: DialogAddCourseComponent},
  {path: 'questionDialog', component: QuestionsDialogComponent},
  {path: 'studentProfile', component: StudentProfileComponent, children: [
    {path: '', redirectTo: 'student-darshboard', pathMatch: 'full'},
    {path: 'student-darshboard', component: StudentdarshboardComponent},
    {path: 'studentexampanel', component:StudentexampanelComponent},
    {path: 'display-question/:qid', component: DisplayQuestionComponent}
  ]},

  {path:'adminPanel', component: AdminPanelComponent, children: [
    {path:'', redirectTo:'admin', pathMatch:'full'},
    {path:'admin', component: AdminComponent},
    {path:'addCourse', component:AddCourseComponent},
    // {path:"questionAndOption",component:QuestionAndOptionsComponent},
    {path:'RegisterStudent', component:RegisterStudentListComponent},
    {path:'addquestion',component:QuestionAndOptionsComponent}
  ]},

  {path:'**', component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
