import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaasUtilsService } from '../../../services/saas-utils.service';
import { GenerateQuoteRequest } from '../../../services/models/generate-quote-request';
import { HttpResponse } from '@angular/common/http';
import { DownloadHelper } from '../../../services/helpers/download-helper';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false
})
export class FormComponent {
  quoteForm!: FormGroup;
  generatingQuote: boolean = false;


  constructor(private fb: FormBuilder, private sassService: SaasUtilsService, private messageService: MessageService) {
    this.buildForm();
  }

  private buildForm(): void {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      customer: ['', Validators.required],
      service: [null, Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      estimatedValue: [null, Validators.required],
      complement: [null]
    });
  }

  submitForm(): void {
    if (this.quoteForm.valid) {
      this.showAdsToContinue();
    } else {
      this.quoteForm.markAllAsTouched();
      this.showToast("error", "Erro", "Por favor preencha os campos necessários!");
    }
  }

  buildRequestWithFormValues() {
    const request: GenerateQuoteRequest = {
      name: this.quoteForm.controls["name"].value,
      email: this.quoteForm.controls["email"].value,
      phone: this.quoteForm.controls["phone"].value,
      customer: this.quoteForm.controls["customer"].value,
      service: this.quoteForm.controls["service"].value,
      description: this.quoteForm.controls["description"].value,
      estimatedValue: this.quoteForm.controls["estimatedValue"].value,
      complement: this.quoteForm.controls["complement"].value
    };

    return request;
  }

  showAdsToContinue() {
    this.generatingQuote = true;
    setTimeout(() => {
      this.generateQuote();
    }, 1000);
  }

  generateQuote() {
    const request = this.buildRequestWithFormValues();

    this.sassService.generateQuote(request)
      .pipe(finalize(() => this.generatingQuote = false))
      .subscribe({
        next: result => {
          this.quoteForm.reset();
          this.downloadFile(result);
        },
        error: () => {
          this.showToast("error", "Erro", "Erro ao gerar orçamento!");
        }
      });
  }

  downloadFile(results: HttpResponse<Blob>): void {
    const fileName = results.headers.get('Filename');
    const mimeType = results.headers.get('Mimetype');
    DownloadHelper.downloadFile([results.body!], fileName!, mimeType!);
  }

  showToast(severity: string, summary: string, detail: string): void {
    this.messageService.clear();
    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
  }


}
