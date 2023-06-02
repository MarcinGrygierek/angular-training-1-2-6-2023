import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastTestComponent } from './multicast-test.component';

describe('MulticastTestComponent', () => {
  let component: MulticastTestComponent;
  let fixture: ComponentFixture<MulticastTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticastTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticastTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
