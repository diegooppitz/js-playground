import { TaxSystem } from '../src/TaxSystem';
import { generateProductData } from '../src/util/generateProductData';
import { federalTaxRate } from "../src/mock";

describe('Renders of TaxSystem', () => {
  it('should initialize system without errors', () => {
    const taxSystem = new TaxSystem();
    expect(() => taxSystem.initSystem()).not.toThrow();
  });

  it('should initialize tax info correctly for california state with a valid data', () => {
    const productTaxStates = generateProductData(federalTaxRate);
    expect(productTaxStates.taxInfo).toBeDefined();
    expect(productTaxStates.taxInfo).not.toHaveProperty('error');
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).toBe(25);
  });

  it('should initialize tax info correctly for ohio state with a valid data', () => {
    const productTaxStates = generateProductData(federalTaxRate);
    expect(productTaxStates.taxInfo).toBeDefined();
    expect(productTaxStates.taxInfo).not.toHaveProperty('error');
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).not.toBe(15);
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).toBe(23);
  });

  it('should handle state with invalid year correctly', () => {
    const productTaxStates = generateProductData(federalTaxRate);
    expect(productTaxStates.taxInfo).toHaveProperty('error', "Error: Unregistred year");
  });

  it('should initialize tax info correctly for New York state with a valid data', () => {
    const productTaxStates = generateProductData(federalTaxRate);
    expect(productTaxStates.taxInfo).toBeDefined();
    expect(productTaxStates.taxInfo).not.toHaveProperty('error');
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).not.toBe(23);
    expect(productTaxStates.taxInfo.taxRates?.totalTaxRate).toBe(15);
  });

  it('should handle invalid state data correctly', () => {
    const productTaxStates = generateProductData(federalTaxRate);
    expect(productTaxStates.taxInfo).toHaveProperty('error', "Error: Invalid fiscal state");
  });
});

