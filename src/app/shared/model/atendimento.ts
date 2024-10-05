import { Atendente } from "./atendente"
import { Mesa } from "./mesa"

export interface Atendimento {
  id?: number,
  mesa: Mesa,
  atendente?: Atendente,
  status?: string
}
