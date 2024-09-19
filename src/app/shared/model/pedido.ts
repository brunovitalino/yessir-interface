import { Atendimento } from "./atendimento";
import { Cardapio } from "./cardapio";

export interface Pedido {
  id: number;
  cardapio: Cardapio;
  quantidade: number;
  atendimento: Atendimento;
}
