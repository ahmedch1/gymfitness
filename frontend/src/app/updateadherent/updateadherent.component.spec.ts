import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadherentComponent } from './updateadherent.component';

describe('UpdateadherentComponent', () => {
  let component: UpdateadherentComponent;
  let fixture: ComponentFixture<UpdateadherentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateadherentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateadherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
