import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-quantidade',
  templateUrl: './seletor-quantidade.component.html',
  styleUrls: ['./seletor-quantidade.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorQuantidadeComponent),
      multi: true
    }
  ]
})
export class SeletorQuantidadeComponent implements ControlValueAccessor {
  
  quantidade: number = 0;
  onChange = (quantidade: number) => {};
  onTouch = () => {};
  
  writeValue(value: number): void {
    this.quantidade = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  
  incrementar() {
    this.quantidade += 1;
    this.onChange(this.quantidade);
    this.onTouch();
  }

  decrementar() {
    if (this.quantidade <= 0) return;
    this.quantidade -= 1;
    this.onChange(this.quantidade);
    this.onTouch();
  }
}
