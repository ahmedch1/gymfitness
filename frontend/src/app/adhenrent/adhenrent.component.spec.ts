import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhenrentComponent } from './adhenrent.component';

describe('AdhenrentComponent', () => {
  let component: AdhenrentComponent;
  let fixture: ComponentFixture<AdhenrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhenrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhenrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
