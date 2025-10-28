import { Cargo } from "./cargo";
import { Empresa } from "./empresa";
import { Setor } from "./setor";
import { SituacaoFuncionario } from "./situacaofuncionario";

export interface Funcionario {
    nome: string;
    dataExercicio: Date;
    datExoneracao: Date;
    empresa: Empresa;
    telefone: string;
    ramal: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    email: string;
    numeroDocumento: string;
    complDocumento: string;
    cracha: string;
    cpf: string;
    dataNascimento: Date;
    observacao: string;
    setor: Setor;
    matricula: string;
    codigoEmpresa: number;
    cargo: Cargo;
    usuario: string;
    situacaoFuncionario: SituacaoFuncionario;
}