import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuotesService } from "./quotes.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.scss"],
})
export class QuotesComponent implements OnInit {
  isSourceDSP: boolean;

  constructor(private router: Router, private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.isSourceDSP = false;
    this.quoteService.isPricingFromDsp.subscribe({
      next: (value) => {
        this.isSourceDSP = value;
      },
    });
  }

  gotoPricingFromDSP() {
    this.router.navigate(["quote", "pricing"], {
      queryParams: {
        source: "DSP",
      },
    });
  }
}
