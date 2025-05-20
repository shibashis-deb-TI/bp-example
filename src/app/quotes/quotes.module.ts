import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { QuotesComponent } from './quotes.component';
import { quotesRoutes } from './quotes.routing';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { QuotesService } from './quotes.service';
import { HelpComponent } from './help/help.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [PricingComponent, QuotesComponent, CustomerComponent, HelpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(quotesRoutes)
  ],
  providers: [QuotesService]
})
export class QuotesModule { }
