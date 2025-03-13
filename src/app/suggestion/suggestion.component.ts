import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SaasUtilsService } from '../../services/saas-utils.service';

@Component({
  selector: 'app-suggestion',
  standalone: false,
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.scss'
})
export class SuggestionComponent {
  suggestionForm: FormGroup = new FormGroup({})
  sendingSuggestion : boolean = false;

  constructor(private fb: FormBuilder, 
              private sassUtils : SaasUtilsService,
              private messageService: MessageService) {
    this.buildForm();
  }

  buildForm(): void {
    this.suggestionForm = this.fb.group(
      {
        name: ['', Validators.required],
        suggestion: ['', Validators.compose([Validators.required, Validators.maxLength(400)])]
      }
    )
  }

  submit(){
    this.showToast("error", "Erro", "Por favor preencha os campos necessários!");
  }

  showToast(severity: string, summary: string, detail: string): void {
    this.messageService.clear();
    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
  }
}
