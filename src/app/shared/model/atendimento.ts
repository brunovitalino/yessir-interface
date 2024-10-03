import { Mesa } from "./mesa"

export interface Atendimento {
  id: number,
  mesa: Mesa,
  mesaId: number,
  atendimento: Atendimento,
  nomeAtendente: string,
  status: string
}
