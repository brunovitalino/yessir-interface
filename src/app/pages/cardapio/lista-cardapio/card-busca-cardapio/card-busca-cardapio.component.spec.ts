import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuscaCardapioComponent } from './card-busca-cardapio.component';

describe('CardBuscaCardapioComponent', () => {
  let component: CardBuscaCardapioComponent;
  let fixture: ComponentFixture<CardBuscaCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBuscaCardapioComponent]
    });
    fixture = TestBed.createComponent(CardBuscaCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
