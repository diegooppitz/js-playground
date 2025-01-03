import { ProductData, TaxInfo, StateFactoryMap, StateItem } from "src/types";
import { California } from "./States/California";
import { Florida } from "./States/Florida";
import { Ohio } from "./States/Ohio";
import { NewYork } from "./States/NewYork";
import { Illinois } from "./States/Illinois";

export class TaxStates {
  listStates: StateItem[];
  taxInfo: TaxInfo;
  #federalTax: number;
  #stateFactoryMap: StateFactoryMap = {
    california: (product) => this.#createCalifornia(product),
    florida: (product) => this.#createFlorida(product),
    illinois: (product) => this.#createIllinois(product),
    ohio: (product) => this.#createOhio(product),
    new_york: (product) => this.#createNewYork(product),
  };

  constructor(federalTaxRate: number) {
    this.#federalTax = federalTaxRate;
    this.listStates = this.#populateListStates();
    this.taxInfo = {};
  }

  #populateListStates() {
    const statesKeys = Object.keys(this.#stateFactoryMap) ?? [];
    
    const formatStateName = (stateKey: string) => {
      return stateKey
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
    };
  
    const states: StateItem[] = statesKeys.map((stateKey) => ({
      label: formatStateName(stateKey),
      name: stateKey,
    }));
  
    return states;
  }

  getTaxRates(product: ProductData) {
    this.#calcTaxRates(product)
  }

  #calcTaxRates(product: ProductData) {
    const stateFactory =
      this.#stateFactoryMap[product.fiscalState.toLowerCase()];
    if (stateFactory) this.taxInfo = stateFactory(product);
    else this.taxInfo.error = "Error: Invalid fiscal state";
  }

  #createCalifornia(product: ProductData): TaxInfo {
    const california = new California(product, this.#federalTax);
    const result = california.getTaxRates();

    if (typeof result === "string") {
      return { error: result };
    }
    return { taxRates: result };
  }

  #createFlorida(product: ProductData): TaxInfo {
    const florida = new Florida(product, this.#federalTax);
    const result = florida.getTaxRates();

    if (typeof result === "string") {
      return { error: result };
    }
    return { taxRates: result };
  }

  #createIllinois(product: ProductData): TaxInfo {
    const illinois = new Illinois(product, this.#federalTax);
    const result = illinois.getTaxRates();

    if (typeof result === "string") {
      return { error: result };
    }
    return { taxRates: result };
  }

  #createOhio(product: ProductData): TaxInfo {
    const ohio = new Ohio(product, this.#federalTax);
    const result = ohio.getTaxRates();

    if (typeof result === "string") {
      return { error: result };
    }
    return { taxRates: result };
  }

  #createNewYork(product: ProductData): TaxInfo {
    const newYork = new NewYork(product, this.#federalTax);
    const result = newYork.getTaxRates();

    if (typeof result === "string") {
      return { error: result };
    }
    return { taxRates: result };
  }
}
