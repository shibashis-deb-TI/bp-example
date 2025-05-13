import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { QuotesComponent } from './quotes.component';
import { quotesRoutes } from './quotes.routing';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { QuotesService } from './quotes.service';

@NgModule({
  declarations: [PricingComponent, QuotesComponent, CustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(quotesRoutes)
  ],
  providers: [QuotesService]
})
export class QuotesModule { }
