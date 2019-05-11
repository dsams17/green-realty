import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFeaturesComponent } from './eco-features.component';

describe('EcoFeaturesComponent', () => {
  let component: EcoFeaturesComponent;
  let fixture: ComponentFixture<EcoFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
