import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedDataComponent } from './expanded-data.component';

describe('ExpandedDataComponent', () => {
  let component: ExpandedDataComponent;
  let fixture: ComponentFixture<ExpandedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
