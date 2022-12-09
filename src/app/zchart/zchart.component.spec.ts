import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZchartComponent } from './zchart.component';

describe('ZchartComponent', () => {
  let component: ZchartComponent;
  let fixture: ComponentFixture<ZchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
