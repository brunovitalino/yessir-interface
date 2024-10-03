import { TestBed } from '@angular/core/testing';

import { PedidoOld2Service } from './pedido-old2.service';

describe('PedidoService', () => {
  let service: PedidoOld2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoOld2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
