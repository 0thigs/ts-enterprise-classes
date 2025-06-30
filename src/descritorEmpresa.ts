import Empresa from './empresa';

export default class Descritor {
  descrever(empresa: Empresa): void {
    console.log(`Razão social: ${empresa.razaoSocial}`);
    console.log(`Nome fantasia:${empresa.nomeFantasia}`);
    console.log(`cnpj: ${empresa.cnpj}`);
    console.log(`Endereco`);
    console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}`);
    console.log(`\nfuncionários:`);

    empresa.funcionarios.forEach(func => {
      console.log(`Nome: ${func.nome}`);
      console.log(`matricula: ${func.matricula}`);
      console.log(`cpf: ${func.cpf}`);
      console.log(`Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} numero: ${func.endereco.numero}`);
    });
  }
}
