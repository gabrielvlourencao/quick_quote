import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-full-screen',
  standalone: false,
  templateUrl: './loading-full-screen.component.html',
  styleUrl: './loading-full-screen.component.scss'
})
export class LoadingFullScreenComponent {
  @Input() message : string = '';

}
