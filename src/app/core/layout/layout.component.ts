import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, RouterModule, MenubarModule, DrawerModule, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  drawerVisible = false;
  currentYear = new Date().getFullYear();
  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/dashboard' },
    { label: 'Produtos', icon: 'pi pi-fw pi-tags', routerLink: '/produtos' },
    { label: 'Funcionários', icon: 'pi pi-fw pi-users', routerLink: '/funcionarios' },
    { label: 'Veículos', icon: 'pi pi-fw pi-car', routerLink: '/veiculo' },
  ];

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
  toggleTheme() {
    document.body.classList.toggle('app-dark-mode');
  }
}
