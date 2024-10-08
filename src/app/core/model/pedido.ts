import { Atendimento } from "./atendimento";
import { Cardapio } from "./cardapio";

export interface Pedido {
  id?: number;
  atendimento?: Atendimento;
  cardapio?: Cardapio;
  quantidade: number;
}
