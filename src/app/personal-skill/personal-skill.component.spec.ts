import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSkillComponent } from './personal-skill.component';

describe('PersonalSkillComponent', () => {
  let component: PersonalSkillComponent;
  let fixture: ComponentFixture<PersonalSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
