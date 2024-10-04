export interface UnidadeFederativa {
  id: number;
  nome: string;
  sigla: string;
}

export interface PessoaUsuaria {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  estado: UnidadeFederativa;
  genero: string;
  sub: string;
  roles: string;
}
