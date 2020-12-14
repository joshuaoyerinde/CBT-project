import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentexampanelComponent } from './studentexampanel.component';

describe('StudentexampanelComponent', () => {
  let component: StudentexampanelComponent;
  let fixture: ComponentFixture<StudentexampanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentexampanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentexampanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
