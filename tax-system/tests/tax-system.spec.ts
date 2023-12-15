import { TaxSystem } from '../src/TaxSystem';

describe('Renders of TaxSystem', () => {
    it('should initialize tax info correctly for california state with valid data', () => {
        const productDataMock = {
            productId: 'ry8ds4qgy',
            year: '2014',
            fiscalState: 'california',
            baseValue: 2989
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);

        const result = taxSystem.result;

        expect(result).toBeDefined();
        expect(result).not.toHaveProperty('error');
        expect(result?.taxRates?.totalTaxRate).toBe(27);
    });

    it('should initialize tax info correctly for ohio state with valid data', () => {
        const productDataMock = {
            productId: 'ry8ds4q32',
            year: '2012',
            fiscalState: 'ohio',
            baseValue: 2000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);
    

        const result = taxSystem.result;

        expect(result).toBeDefined();
        expect(result).not.toHaveProperty('error');
        expect(result?.taxRates?.totalTaxRate).toBe(22.5);
    });

    it('should initialize state data valid and unregistred year(in the period between 2010 and 2023) correctly', () => {
        const productDataMock = {
            productId: 'ry8ds4q32',
            year: '2019',
            fiscalState: 'new_york',
            baseValue: 2000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);
    

        const result = taxSystem.result;

        expect(result).toBeDefined();
        expect(result).not.toHaveProperty('error');
        expect(result?.taxRates?.totalTaxRate).toBe(23);
    });


    it('should initialize state data valid and year before 2010 correctly', () => {
        const productDataMock = {
            productId: 'ry8ds4q89',
            year: '2005',
            fiscalState: 'new_york',
            baseValue: 2000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);
    

        const result = taxSystem.result;

        expect(result).toBeDefined();
        expect(result).toHaveProperty('error');
    });

    it('should handle invalid state data correctly', () => {
        const productDataMock = {
            productId: 'ry8dhahdas',
            year: '2019',
            fiscalState: 'florida',
            baseValue: 2000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);
    
        const result = taxSystem.result;

        expect(result).toBeDefined();
        expect(result).toHaveProperty('error');
    });
});