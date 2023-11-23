import { TaxStates } from "../";

export class NewYork extends TaxStates {
    getTaxRates(): number {
        return 15;
    }
}