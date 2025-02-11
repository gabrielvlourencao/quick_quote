import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private primeng: PrimeNG) {}
  changeThemeValue: boolean = false;

  ngOnInit() {
      this.primeng.ripple.set(true);
  }


  changeTheme() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark');
  }
}
