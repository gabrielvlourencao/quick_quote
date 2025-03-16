import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DatePickerModule } from 'primeng/datepicker'
import { SelectModule } from 'primeng/select'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './budget/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { LoadingFullScreenComponent } from './shared/loaders/loading-full-screen.component';
import { AdsComponent } from './shared/ads/ads.component';
import { BudgetComponent } from './budget/budget.component';
import { MainComponent } from './main/main.component';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SuggestionComponent } from './suggestion/suggestion.component';

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}'
    }
  }
});

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoadingFullScreenComponent,
    AdsComponent,
    BudgetComponent,
    MainComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ToggleSwitchModule,
    DatePickerModule,
    SelectModule,
    CardModule,
    ButtonModule,
    InputMaskModule,
    TextareaModule,
    InputNumberModule,
    EditorModule,
    FileUploadModule,
    ToastModule,
    ChipModule,
    DialogModule,
    FloatLabelModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: preset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

