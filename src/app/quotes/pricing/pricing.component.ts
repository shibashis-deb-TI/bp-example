import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuotesService } from "../quotes.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent implements OnInit, OnDestroy {
  isSourceDSP: boolean;
  constructor(
    private route: ActivatedRoute,
    private quoteService: QuotesService
  ) {}

  ngOnInit(): void {
    this.isSourceDSP = false;

    this.route.queryParams.subscribe({
      next: (param) => {
        console.log(param);
        this.isSourceDSP = param["source"] === "DSP";
        this.quoteService.setIsPricingFromDsp(param["source"] === "DSP");
      },
    });
  }

  ngOnDestroy(): void {
    this.quoteService.setIsPricingFromDsp(false);
    this.isSourceDSP = false;
  }
}
