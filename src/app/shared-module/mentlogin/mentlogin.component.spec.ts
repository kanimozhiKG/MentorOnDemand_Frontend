import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentloginComponent } from './mentlogin.component';

describe('MentloginComponent', () => {
  let component: MentloginComponent;
  let fixture: ComponentFixture<MentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
