import { Component, OnInit } from '@angular/core';
import { RegisterStudentService } from '../services/register-student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-student-list',
  templateUrl: './register-student-list.component.html',
  styleUrls: ['./register-student-list.component.css']
})
export class RegisterStudentListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

public registerStud=[];
public filterText= "";
  constructor(private registerService: RegisterStudentService, public snacbar: MatSnackBar) { }

  ngOnInit() {
    this.getRegisterStud();
  }
  getRegisterStud(){
    this.registerService.registerStudent().subscribe(list => {
      let lt = list.listOfStudent;
      this.registerStud = lt
      console.log(this.registerStud);
    })
  }
  deleteStudent(value){
    this.registerService.deleteRegisterStudent({id: value}).subscribe(del=>{
      // let remove=del
      this.getRegisterStud();
      let snacbarref=this.snacbar.open("one details have been deleted","Dismiss",{
        duration:2000,
      })
    });
  }
}
