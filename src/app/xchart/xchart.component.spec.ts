import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchartComponent } from './xchart.component';

describe('XchartComponent', () => {
  let component: XchartComponent;
  let fixture: ComponentFixture<XchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
