import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccModalComponent } from './create-acc-modal.component';

describe('CreateAccModalComponent', () => {
  let component: CreateAccModalComponent;
  let fixture: ComponentFixture<CreateAccModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
