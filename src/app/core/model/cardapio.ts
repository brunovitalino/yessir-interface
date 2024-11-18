import { CardapioIcone } from "./cardapio-icone";
import { CardapioTipo } from "./cardapio-tipo";
import { Imagem } from "./imagem";

export interface Cardapio {
  id: number;
  nome: string;
  preco: number;
  imagem: Imagem;
  cardapioIcone?: CardapioIcone;
  cardapioTipo?: CardapioTipo;
  quantidade?: number;
}