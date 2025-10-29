import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

// ... (todos os seus imports do PrimeNG)
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card'; 

@Component({
  selector: 'app-historico-km',
  standalone: true, 
  imports: [
    CommonModule, 
    FormsModule,
    RadioButtonModule, 
    PanelModule, 
    TableModule, 
    ButtonModule, 
    InputTextModule,
    TextareaModule,
    CardModule
  ],
  templateUrl: './historico-km.component.html',
  styleUrl: './historico-km.component.scss'
})
export class HistoricoKmComponent implements OnInit { 
  
  modoView: 'lista' | 'detalhes' | 'edicao' = 'lista';

  statusSelecionado: string = 'ativos';
  veiculosMaster: any[] = []; 
  veiculosExibidos: any[] = [];
  
  veiculoSelecionadoParaDetalhe: any = null;
  detalhesQuilometragem: any[] = [];
  
  itemSelecionadoParaEdicao: any = null;
  kmChegadaAlterado: number | null = null;
  justificativa: string = '';

  constructor() { }

  ngOnInit(): void {
    this.veiculosMaster = [
      { requisicao: 'REQ-001', placa: 'JUL5567', kmChegada: 90515, situacao: true }, 
      { requisicao: 'REQ-002', placa: 'DEF-5678', kmChegada: 80500, situacao: true },
      { requisicao: 'REQ-003', placa: 'GHI-9012', kmChegada: 210200, situacao: false }
    ];
    this.filtrarPorStatus();
  }

  
  filtrarPorStatus() {
    const statusAtivo = (this.statusSelecionado === 'ativos');
    this.veiculosExibidos = this.veiculosMaster.filter(veiculo => 
      veiculo.situacao === statusAtivo
    );
  }

  abrirDetalhes(veiculo: any) {
    this.veiculoSelecionadoParaDetalhe = veiculo;
    this.detalhesQuilometragem = [
      { requisicao: '00007/2017', placa: 'JUL5567', kmSaida: 56978, kmChegada: 57031, distancia: 53 },
      { requisicao: '00033/2019', placa: 'JUL5567', kmSaida: 90440, kmChegada: 90448, distancia: 8 },
      { requisicao: '00039/2020', placa: 'JUL5567', kmSaida: 112717, kmChegada: 112752, distancia: 35 },
      { requisicao: '00043/2019', placa: 'JUL5567', kmSaida: 90448, kmChegada: 90455, distancia: 7 },
      { requisicao: '00044/2020', placa: 'JUL5567', kmSaida: 112752, kmChegada: 112767, distancia: 15 },
    ];
    
    this.modoView = 'detalhes';
  }
  
  abrirEdicao(itemDoDetalhe: any) {
    this.itemSelecionadoParaEdicao = itemDoDetalhe;
    this.kmChegadaAlterado = itemDoDetalhe.kmChegada;
    this.justificativa = ''; 
    this.modoView = 'edicao';
  }
  
  voltarParaLista() {
    this.modoView = 'lista';
    this.veiculoSelecionadoParaDetalhe = null;
    this.detalhesQuilometragem = [];
  }
  
  voltarParaDetalhes() {
    this.modoView = 'detalhes';
    this.itemSelecionadoParaEdicao = null;
  }

  salvarEdicao() {
    console.log('Salvando dados para a requisição:', this.itemSelecionadoParaEdicao.requisicao);
    
    alert('Dados salvos com sucesso! (Simulação)');
    this.voltarParaDetalhes();
  }
}