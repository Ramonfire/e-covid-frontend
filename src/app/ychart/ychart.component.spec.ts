import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YchartComponent } from './ychart.component';

describe('YchartComponent', () => {
  let component: YchartComponent;
  let fixture: ComponentFixture<YchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
