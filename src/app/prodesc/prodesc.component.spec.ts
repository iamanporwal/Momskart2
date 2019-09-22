import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdescComponent } from './prodesc.component';

describe('ProdescComponent', () => {
  let component: ProdescComponent;
  let fixture: ComponentFixture<ProdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
