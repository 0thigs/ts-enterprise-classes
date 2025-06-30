import Funcionario from './funcionario';
import Endereco from './endereco';

export default class Empresa {
  constructor(
    public funcionarios: Funcionario[],
    public endereco: Endereco,
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string
  ) {}
}
