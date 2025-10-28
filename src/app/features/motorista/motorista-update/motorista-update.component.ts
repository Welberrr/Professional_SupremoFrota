import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { Motorista } from '../../../shared/interfaces/motorista';
import { MotoristaService } from '../../../shared/services/motorista.service';

@Component({
  selector: 'app-motorista-update',
  imports: [CommonModule, TableModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, DatePickerModule],
  templateUrl: './motorista-update.component.html',
  styleUrls: ['./motorista-update.component.scss'],
})
export class MotoristaUpdateComponent {
  motoristas!: Motorista[];
  authorizationString: string = 'Basic UkFGQUVMLkpBUkRJTTpzdGY=';

  constructor(private motoristaService: MotoristaService) {}

  ngOnInit(): void {
    this.loadMotoristas();
  }

  private loadMotoristas(): void {

    this.motoristaService.all(this.authorizationString).subscribe({
      next: (motoristas) => {
        this.motoristas = motoristas;
      },
      error: (error) => {
        console.error('Error loading motoristas:', error);
      },
    });
  }

  novoMotorista(): void {
    // Implement new motorista functionality
  }
  
  editMotorista(motorista): void {
    // Implement edit functionality
  }

  deleteMotorista(motorista): void {
    // Implement delete functionality
  }

  viewMotorista(motorista): void {
    // Implement view functionality
  }
}
