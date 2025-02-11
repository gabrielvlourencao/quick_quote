import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone : false
})
export class FormComponent implements OnInit {
  quoteForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      customer: ['', Validators.required],
      service: [null, Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: [null, Validators.required],
      estimatedValue: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.quoteForm.valid) {
      console.log('Orçamento enviado:', this.quoteForm.value);
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }
}
