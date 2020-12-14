import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdarshboardComponent } from './studentdarshboard.component';

describe('StudentdarshboardComponent', () => {
  let component: StudentdarshboardComponent;
  let fixture: ComponentFixture<StudentdarshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdarshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdarshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
