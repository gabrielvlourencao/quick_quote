import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { MainComponent } from './main/main.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', redirectTo: '' },
  { path: 'budget', component: BudgetComponent, pathMatch: 'full' },
  { path: 'suggestion', component: SuggestionComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
