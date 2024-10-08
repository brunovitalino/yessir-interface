import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPedirComponent } from './modal-pedir.component';

describe('ModalPedirComponent', () => {
  let component: ModalPedirComponent;
  let fixture: ComponentFixture<ModalPedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
