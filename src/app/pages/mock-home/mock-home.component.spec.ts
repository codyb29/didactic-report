import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHomeComponent } from './mock-home.component';

describe('MockHomeComponent', () => {
  let component: MockHomeComponent;
  let fixture: ComponentFixture<MockHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
