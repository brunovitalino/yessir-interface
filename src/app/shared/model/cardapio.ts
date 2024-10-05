import { CardapioIcone } from "./cardapio-icone";
import { CardapioTipo } from "./cardapio-tipo";

export interface Cardapio {
  id: number;
  nome: string;
  preco: number;
  cardapioIcone?: CardapioIcone;
  cardapioTipo?: CardapioTipo;
  quantidade?: number;
}