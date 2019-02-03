import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogalogComponent } from './dogalog.component';

describe('DogalogComponent', () => {
  let component: DogalogComponent;
  let fixture: ComponentFixture<DogalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
