import { AtivoInativoEnum } from "../enum/ativoinativo";

export interface TipoMotorista {
    id: number;
    descricao: string;
    ativo: AtivoInativoEnum;
}