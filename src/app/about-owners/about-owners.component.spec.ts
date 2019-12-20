import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOwnersComponent } from './about-owners.component';

describe('AboutOwnersComponent', () => {
  let component: AboutOwnersComponent;
  let fixture: ComponentFixture<AboutOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
