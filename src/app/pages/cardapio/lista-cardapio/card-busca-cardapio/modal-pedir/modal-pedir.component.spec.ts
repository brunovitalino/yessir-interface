import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPedirComponent } from './modal-pedir.component';

describe('ModalPedirComponent', () => {
  let component: ModalPedirComponent;
  let fixture: ComponentFixture<ModalPedirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPedirComponent]
    });
    fixture = TestBed.createComponent(ModalPedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
