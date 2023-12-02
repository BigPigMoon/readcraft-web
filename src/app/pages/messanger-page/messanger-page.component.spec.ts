import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessangerPageComponent } from './messanger-page.component';

describe('MessangerPageComponent', () => {
  let component: MessangerPageComponent;
  let fixture: ComponentFixture<MessangerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessangerPageComponent]
    });
    fixture = TestBed.createComponent(MessangerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
