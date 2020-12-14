import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipQuestion'
})
export class PipQuestionPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }
  transform(searchquest, searchbox){

    let tlower = searchbox.toLowerCase();
    let newQuestion = searchquest.filter(s => s.course.toLowerCase().includes(tlower));

    return newQuestion;
  }

}
