import { TestBed } from '@angular/core/testing';

import { ModalAdicionarService } from './modal-adicionar.service';

describe('ModalAdicionarService', () => {
  let service: ModalAdicionarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAdicionarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
