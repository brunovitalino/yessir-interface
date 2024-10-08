import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBuscaComponent } from './filter-busca.component';

describe('FilterBuscaComponent', () => {
  let component: FilterBuscaComponent;
  let fixture: ComponentFixture<FilterBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
