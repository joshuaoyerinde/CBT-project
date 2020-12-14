import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormDirectiveDirective } from './form-directive.directive';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupVilidateDirective } from './signup-vilidate.directive';
import { Error404Component } from './error404/error404.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DialogAddCourseComponent } from './dialog-add-course/dialog-add-course.component';
import { RegisterStudentListComponent } from './register-student-list/register-student-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { MaterialModule } from './material/material.module';
import { FilterstudentPipe } from './pipe/filterstudent.pipe';
import { QuestionAndOptionsComponent } from './question-and-options/question-and-options.component';
import { QuestionsDialogComponent } from './questions-dialog/questions-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { PipQuestionPipe } from './pipe/pip-question.pipe';
import { StudentdarshboardComponent } from './studentdarshboard/studentdarshboard.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { StudentexampanelComponent } from './studentexampanel/studentexampanel.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FormDirectiveDirective,
    AdminPanelComponent,
    SignupComponent,
    SignupVilidateDirective,
    Error404Component,
    AddCourseComponent,
    DialogAddCourseComponent,
    RegisterStudentListComponent,
    StudentProfileComponent,
    FilterstudentPipe,
    QuestionAndOptionsComponent,
    QuestionsDialogComponent,
    PipQuestionPipe,
    StudentdarshboardComponent,
    DisplayQuestionComponent,
    StudentexampanelComponent,
    // MaterialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MaterialModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
