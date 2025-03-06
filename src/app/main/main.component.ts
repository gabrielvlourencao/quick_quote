import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  paymentDialogVisible: boolean = false;
  pixKey : string = "12298cd4-58a6-4ffe-b4a2-34dae5e3881f";

  constructor(private messageService: MessageService) { }

  redirectTo(link: string): void {
    window.open(link, "_blank")
  }

  handlePaymentDialog(): void {
    this.paymentDialogVisible = !this.paymentDialogVisible;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast("success", "Sucesso!", "Chave pix copiada!");
    }).catch(err => {
      this.showToast("error", "Erro", "Erro ao copiar chave pix");
    });
  }

  showToast(severity: string, summary: string, detail: string): void {
    this.messageService.clear();
    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
  }
}
