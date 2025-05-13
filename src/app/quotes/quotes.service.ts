import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuotesService {
  private isPricingFromDsp$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  get isPricingFromDsp() {
    return this.isPricingFromDsp$.asObservable();
  }

  setIsPricingFromDsp(isSourceDsp: boolean) {
    this.isPricingFromDsp$.next(isSourceDsp);
  }
}
