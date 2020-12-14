import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterstudent'
})
export class FilterstudentPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
    // return null;
  // }
  transform(studList, searchstud){
    // if(!searchstud) return studList;

    let tlower = searchstud.toLowerCase();
    let newStudent = studList.filter(t => t.firstname.includes(tlower) || t.lastname.includes(tlower));

    return newStudent;
  }

}
