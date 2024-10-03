import { TestBed } from '@angular/core/testing';

import { AtendimentoServiceOld } from './atendimento_OLD.service';

describe('AtendimentoService', () => {
  let service: AtendimentoServiceOld;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendimentoServiceOld);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
