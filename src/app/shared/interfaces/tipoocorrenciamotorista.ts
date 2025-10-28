import { AtivoInativoEnum } from "../enum/ativoinativo";

export interface TipoOcorrenciaMotorista {
    id: number;
	descricao: string;
	flgRequisicaoDireta: AtivoInativoEnum;
}