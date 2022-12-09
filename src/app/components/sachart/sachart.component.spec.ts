import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachartComponent } from './sachart.component';

describe('SachartComponent', () => {
  let component: SachartComponent;
  let fixture: ComponentFixture<SachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
