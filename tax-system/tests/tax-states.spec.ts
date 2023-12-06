import { generateProductData } from '../src/common';
import { californiaValidYear, ohioInvalidYear, ohioValidYear, invalidState, baseValue } from "../src/mock";

describe('Renders of TaxStates', () => {
  it('should initialize tax info correctly for california state with a valid data', () => {
    const productTaxStates = generateProductData(californiaValidYear, baseValue);
    expect(productTaxStates.taxInfo).toBeDefined();
    expect(productTaxStates.taxInfo).not.toHaveProperty('error');
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).toBe(25);
  });

  it('should initialize tax info correctly for ohio state with a valid data', () => {
    const productTaxStates = generateProductData(ohioValidYear, baseValue);
    expect(productTaxStates.taxInfo).toBeDefined();
    expect(productTaxStates.taxInfo).not.toHaveProperty('error');
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).not.toBe(15);
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).toBe(21);
  });

  it('should handle state with invalid year correctly', () => {
    const productTaxStates = generateProductData(ohioInvalidYear, baseValue);
    expect(productTaxStates.taxInfo).toHaveProperty('error', "Error: Unregistred year");
  });

  it('should handle invalid state data correctly', () => {
    const productTaxStates = generateProductData(invalidState, baseValue);
    expect(productTaxStates.taxInfo).toHaveProperty('error', "Error: Invalid fiscal state");
  });
});