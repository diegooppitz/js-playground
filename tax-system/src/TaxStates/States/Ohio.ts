import { TaxStates } from "../";

export class Ohio extends TaxStates {
    getTaxRates(): number {
        return 7;
    }
}