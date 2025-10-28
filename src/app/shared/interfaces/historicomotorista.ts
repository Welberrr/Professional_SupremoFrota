import { SimNaoEnum } from "../enum/simnao";
import { TipoOcorrenciaMotorista } from "./tipoocorrenciamotorista";

export interface HistoricoMotorista {
    id: number;
	dataInicial: Date;
	dataFinal: Date;
	obs_entrada: string;
	obs_saida: string;
	disponivel: SimNaoEnum;
	habilitado: SimNaoEnum;
	tipoOcorrenciaMotorista: TipoOcorrenciaMotorista;
	txtObservacaoOcorrencia: string;
	usuarioInclusao: string;
	nomeMotorista: string;
}