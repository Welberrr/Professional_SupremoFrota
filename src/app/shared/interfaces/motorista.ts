import { AtivoInativoEnum } from "../enum/ativoinativo";
import { SimNaoEnum } from "../enum/simnao";
import { Funcionario } from "./funcionario";
import { HistoricoMotorista } from "./historicomotorista";
import { Setor } from "./setor";
import { TipoMotorista } from "./tipomotorista";
import { Usuario } from "./usuario";

export interface Motorista {
    id: number;
    tipoMotorista: TipoMotorista;
    dscHoraEntrada: string;
    dscHoraSaida: string;
    dscHoraAlmoco: string;
    numeroRegistroCnh: number;
	dataValidadeCnh: Date;
	funcionario: Funcionario;
	flgDisponivel: SimNaoEnum;
	flgTrataHorarios: string;
	flgHabilitado: SimNaoEnum;
	categoria: string;
	setorAtendimento: Setor;
	flgRequisicaoDireta: AtivoInativoEnum;
	flgAtivo: AtivoInativoEnum;
	primeiroNome: string;
	historicoMotorista: HistoricoMotorista[];
	imagemCNH: Uint8Array;
	usuario: Usuario;
	nomeMotorista: string;
	existeInfracao: boolean;
}