import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentraineurComponent } from './addentraineur.component';

describe('AddentraineurComponent', () => {
  let component: AddentraineurComponent;
  let fixture: ComponentFixture<AddentraineurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddentraineurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
