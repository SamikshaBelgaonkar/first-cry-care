import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyNamesComponent } from './baby-names.component';

describe('BabyNamesComponent', () => {
  let component: BabyNamesComponent;
  let fixture: ComponentFixture<BabyNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
