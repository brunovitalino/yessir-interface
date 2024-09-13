export interface Pedido {
  id: number;
  nome: string;
  preco: number;
  nomeIcone?: string;
  tipo: string;
  quantidade?: number;
}
