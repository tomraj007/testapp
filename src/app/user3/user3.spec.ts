import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User3 } from './user3';

describe('User3', () => {
  let component: User3;
  let fixture: ComponentFixture<User3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
