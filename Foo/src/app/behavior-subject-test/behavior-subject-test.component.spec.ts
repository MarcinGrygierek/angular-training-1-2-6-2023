import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectTestComponent } from './behavior-subject-test.component';

describe('BehaviorSubjectTestComponent', () => {
  let component: BehaviorSubjectTestComponent;
  let fixture: ComponentFixture<BehaviorSubjectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
