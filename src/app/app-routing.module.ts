import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesModule } from './quotes/quotes.module';


const routes: Routes = [
  {path: '', redirectTo: "quote", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), QuotesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
