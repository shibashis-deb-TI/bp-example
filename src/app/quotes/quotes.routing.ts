import { Routes } from "@angular/router";
import { QuotesModule } from "./quotes.module";
import { QuotesComponent } from "./quotes.component";
import { PricingComponent } from "./pricing/pricing.component";
import { CustomerComponent } from "./customer/customer.component";

export const quotesRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "quote" },
  {
    path: "quote",
    component: QuotesComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "customer" },
      { path: "pricing", component: PricingComponent },
      { path: "customer", component: CustomerComponent },
    ],
  },
];
