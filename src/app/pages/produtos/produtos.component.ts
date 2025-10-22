import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  imports: [CommonModule, TableModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent {
  produtos = Array.from({ length: 200 }).map((_, i) => ({
    id: i + 1,
    nome: 'Produto ' + (i + 1),
    preco: Math.round(Math.random() * 1000) + 10,
    estoque: Math.floor(Math.random() * 100),
  }));
}
