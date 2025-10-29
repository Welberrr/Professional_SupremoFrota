import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

// Módulos PrimeNG
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
  
  statusSelecionado: string = 'ativos'; // O filtro começa em 'ativos'
  
  // MUDANÇA 1: Renomeamos a lista principal para 'veiculosMaster'
  veiculosMaster: any[] = []; 
  
  // MUDANÇA 2: Criamos uma nova lista que será exibida na tabela
  veiculosExibidos: any[] = [];

  // Propriedades da tela de edição (sem alteração)
  modoEdicao: boolean = false; 
  veiculoSelecionado: any = null; 
  kmChegadaAlterado: number | null = null;
  justificativa: string = '';

  constructor() { }

  ngOnInit(): void {
    // 1. Carregamos nossos dados de teste na lista MASTER
    this.veiculosMaster = [
      { requisicao: 'REQ-001', placa: 'ABC-1234', kmSaida: 56978, kmChegada: 57031, situacao: true }, // Ativo
      { requisicao: 'REQ-002', placa: 'DEF-5678', kmSaida: 80000, kmChegada: 80500, situacao: true }, // Ativo
      { requisicao: 'REQ-003', placa: 'GHI-9012', kmSaida: 210000, kmChegada: 210200, situacao: false } // Inativo
    ];
    
    // 2. Chamamos a função de filtro pela primeira vez para popular a tabela
    this.filtrarPorStatus();
  }

  // --- MUDANÇA 3: NOVA FUNÇÃO DE FILTRO ---
  /**
   * Filtra a lista 'veiculosMaster' com base no 'statusSelecionado'
   * e atualiza a lista 'veiculosExibidos'.
   */
  filtrarPorStatus() {
    const statusAtivo = (this.statusSelecionado === 'ativos'); // true ou false
    
    this.veiculosExibidos = this.veiculosMaster.filter(veiculo => 
      veiculo.situacao === statusAtivo
    );
  }

  // --- Funções da Tela de Edição (sem alteração) ---

  abrirEdicao(veiculo: any) {
    this.veiculoSelecionado = veiculo;
    this.kmChegadaAlterado = veiculo.kmChegada;
    this.justificativa = ''; 
    this.modoEdicao = true; 
  }

  voltarParaLista() {
    this.modoEdicao = false; 
    this.veiculoSelecionado = null;
    this.kmChegadaAlterado = null;
    this.justificativa = '';
  }

  salvarEdicao() {
    console.log('Salvando dados para a placa:', this.veiculoSelecionado.placa);
    // ...
    alert('Dados salvos com sucesso! (Simulação)');
    this.voltarParaLista();
    // Poderíamos recarregar os dados do "banco" aqui no futuro
  }
}