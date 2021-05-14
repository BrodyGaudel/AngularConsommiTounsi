import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintlivreurComponent } from './printlivreur.component';

describe('PrintlivreurComponent', () => {
  let component: PrintlivreurComponent;
  let fixture: ComponentFixture<PrintlivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintlivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
