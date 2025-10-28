import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Motorista } from '../../../shared/interfaces/motorista';
import { MotoristaService } from '../../../shared/services/motorista.service';

@Component({
  selector: 'app-motorista-list',
  imports: [CommonModule, TableModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './motorista-list.component.html',
  styleUrls: ['./motorista-list.component.scss'],
})
export class MotoristaListComponent {
  motoristas!: Motorista[];
  authorizationString: string = 'Basic UkFGQUVMLkpBUkRJTTpzdGY=';

  constructor(private router: Router, private motoristaService: MotoristaService) {}

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
    this.router.navigate(['/motorista/create']);
  }
  
  editMotorista(motorista): void {
    this.router.navigate(['/motorista/edit', motorista.id]);
  }

  deleteMotorista(motorista): void {
    // Implement delete functionality
  }

  viewMotorista(motorista): void {
    // Implement view functionality
  }
}
