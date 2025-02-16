import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private environmentVariablesExternal: any = {};
  private environmentVariablesInternal = environment;

  async loadConfig(): Promise<void> {
    try {
      const response = await fetch('/assets/environment-variables.json');
      this.environmentVariablesExternal = await response.json();
      console.log('CALL: this.environmentVariablesExternal:', this.environmentVariablesExternal);
    } catch (error) {
      console.error('Erro ao carregar a configuração:', error);
    }
  }

  get apiHost(): string {
    return this.environmentVariablesExternal.apiHost || this.environmentVariablesInternal.apiHost; // Se nao for passado variavel de ambiente, entao ele pegara o valor padrao do environment de prod
  }
}
