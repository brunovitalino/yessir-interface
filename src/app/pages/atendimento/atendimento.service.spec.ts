import { TestBed } from '@angular/core/testing';
import { AtendimentoService } from 'src/app/core/service/atendimento.service';


describe('AtendimentoService', () => {
  let service: AtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
