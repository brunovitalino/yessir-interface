import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBuscaComponent } from './filter-busca.component';

describe('FilterBuscaComponent', () => {
  let component: FilterBuscaComponent;
  let fixture: ComponentFixture<FilterBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBuscaComponent]
    });
    fixture = TestBed.createComponent(FilterBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
