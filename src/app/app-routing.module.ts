import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // Redirection initiale vers le placeholder
    { path: '', redirectTo: '/calculator', pathMatch: 'full' },
    { path: "calculator", component:CalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
