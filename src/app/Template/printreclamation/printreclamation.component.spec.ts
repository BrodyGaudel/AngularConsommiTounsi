import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreclamationComponent } from './printreclamation.component';

describe('PrintreclamationComponent', () => {
  let component: PrintreclamationComponent;
  let fixture: ComponentFixture<PrintreclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintreclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
