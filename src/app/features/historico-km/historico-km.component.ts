import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico-km',
  imports: [RadioButtonModule, PanelModule, TableModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './historico-km.component.html',
  styleUrl: './historico-km.component.scss'
})
export class HistoricoKmComponent {
    statusSelecionado: string = 'ativos';
}
