import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHomePageComponent } from './mock-home-page.component';

describe('MockHomePageComponent', () => {
  let component: MockHomePageComponent;
  let fixture: ComponentFixture<MockHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
