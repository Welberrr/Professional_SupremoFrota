import { SimNaoEnum } from "../enum/simnao";

export interface Setor {
    id: number;
    sigla: string;
    nome: string;
    codigoLotacao: number;
    ativo: SimNaoEnum;
}