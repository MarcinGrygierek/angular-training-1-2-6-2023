import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectTestComponent } from './async-subject-test.component';

describe('AsyncSubjectTestComponent', () => {
  let component: AsyncSubjectTestComponent;
  let fixture: ComponentFixture<AsyncSubjectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncSubjectTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
