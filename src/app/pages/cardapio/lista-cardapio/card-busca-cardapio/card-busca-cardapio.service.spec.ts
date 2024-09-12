import { TestBed } from '@angular/core/testing';

import { CardBuscaCardapioService } from './card-busca-cardapio.service';

describe('CardBuscaCardapioService', () => {
  let service: CardBuscaCardapioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardBuscaCardapioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
