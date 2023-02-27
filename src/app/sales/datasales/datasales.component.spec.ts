import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasalesComponent } from './datasales.component';

describe('DatasalesComponent', () => {
  let component: DatasalesComponent;
  let fixture: ComponentFixture<DatasalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
