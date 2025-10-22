import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo',
  imports: [TableModule, RadioButtonModule, PanelModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './veiculo.component.html',
  styleUrl: './veiculo.component.scss'
})
export class VeiculoComponent {
  statusSelecionado: string = 'ativos';
}
