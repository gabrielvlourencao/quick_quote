import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private primeng: PrimeNG, private router : Router) { }
  changeThemeValue: boolean = false;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.primeng.ripple.set(true);

    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/main']);
        }
      },
      {
        label: 'Orçamento',
        icon: 'pi pi-pen-to-square',
        command: () => {
          this.router.navigate(['/budget']);
        }
      }
    ];
  }


  changeTheme() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark');
  }
}
