import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorQuantidadeComponent } from './seletor-quantidade.component';

describe('SeletorQuantidadeComponent', () => {
  let component: SeletorQuantidadeComponent;
  let fixture: ComponentFixture<SeletorQuantidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorQuantidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
