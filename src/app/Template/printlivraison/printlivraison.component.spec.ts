import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintlivraisonComponent } from './printlivraison.component';

describe('PrintlivraisonComponent', () => {
  let component: PrintlivraisonComponent;
  let fixture: ComponentFixture<PrintlivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintlivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
