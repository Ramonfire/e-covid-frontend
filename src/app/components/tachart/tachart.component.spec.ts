import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachartComponent } from './tachart.component';

describe('TachartComponent', () => {
  let component: TachartComponent;
  let fixture: ComponentFixture<TachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
