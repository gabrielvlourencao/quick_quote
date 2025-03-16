import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SaasUtilsService } from '../../services/saas-utils.service';
import { SuggestionRequest } from '../../services/models/suggestion-request';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-suggestion',
  standalone: false,
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.scss'
})
export class SuggestionComponent {
  suggestionForm: FormGroup = new FormGroup({})
  sendingSuggestion: boolean = false;

  constructor(private fb: FormBuilder,
    private sassUtils: SaasUtilsService,
    private messageService: MessageService) {
    this.buildForm();
  }

  buildForm(): void {
    this.suggestionForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        suggestion: ['', [Validators.required, Validators.maxLength(400)]]
      }
    )
  }

  submit() {
    if (this.suggestionForm.valid) {
      this.sendSuggestion();
    } else {
      this.suggestionForm.markAllAsTouched();
      this.showToast("error", "Erro", "Por favor preencha os campos necessários23!");
    }
  }

  sendSuggestion(): void {
    const request = this.buildRequest();

    this.sendingSuggestion = true;

    this.sassUtils.sendSuggestion(request)
      .pipe(finalize(() => this.sendingSuggestion = false))
      .subscribe(
        {
          next: () => {
            this.showToast("success", "Sugestão enviada!", "Recebida e enviada para análise!");
            this.suggestionForm.reset();
          },
          error: () => this.showToast("error", "Erro", "Por favor preencha os campos necessários!")
        })
  }

  buildRequest(): SuggestionRequest {
    return {
      name: this.suggestionForm.controls["name"].value,
      email: this.suggestionForm.controls["email"].value,
      suggestion: this.suggestionForm.controls["suggestion"].value
    }
  }

  showToast(severity: string, summary: string, detail: string): void {
    this.messageService.clear();
    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
  }
}
