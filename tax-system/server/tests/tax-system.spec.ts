import { ProductData } from '@/types';
import { TaxSystem } from '../src/TaxSystem';

describe('Renders of TaxSystem', () => {
    it('should initialize tax info correctly for california state with valid data', () => {
        const productDataMock = {
            productId: 'ry8ds4qgy',
            year: '2014',
            fiscalState: 'california',
            baseValue: 1000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);

        const taxInfo = taxSystem.taxInfo;
        const productData = taxSystem.product?.productData as ProductData;

        expect(taxInfo).toBeDefined();
        expect(taxInfo).not.toHaveProperty('error');
        expect(taxInfo?.taxRates?.totalTaxRate).toBe(27);
        expect(productData.totalValue).toBe(1270);
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
    
        const taxInfo = taxSystem.taxInfo;
        const productData = taxSystem.product?.productData as ProductData;

        expect(taxInfo).toBeDefined();
        expect(taxInfo).not.toHaveProperty('error');
        expect(taxInfo?.taxRates?.totalTaxRate).toBe(22.5);
        expect(productData.totalValue).toBe(2450);
    });

    it('should initialize state data valid and unregistered year(in the period between 2010 and 2023) correctly', () => {
        const productDataMock = {
            productId: 'ry8ds4q32',
            year: '2019',
            fiscalState: 'new_york',
            baseValue: 1000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);
    
        const taxInfo = taxSystem.taxInfo;
        const productData = taxSystem.product?.productData as ProductData;

        expect(taxInfo).toBeDefined();
        expect(taxInfo).not.toHaveProperty('error');
        expect(taxInfo?.taxRates?.totalTaxRate).toBe(23);
        expect(productData.totalValue).toBe(1230);
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
    
        const taxInfo = taxSystem.taxInfo;

        expect(taxInfo).toBeDefined();
        expect(taxInfo).toHaveProperty('error');
    });

    it('should handle invalid state data correctly', () => {
        const productDataMock = {
            productId: 'ry8dhahdas',
            year: '2019',
            fiscalState: 'alabama',
            baseValue: 2000
        };
    
        const taxSystem = new TaxSystem();
        taxSystem.initSystem(productDataMock);
    
        const taxInfo = taxSystem.taxInfo;

        expect(taxInfo).toBeDefined();
        expect(taxInfo).toHaveProperty('error');
    });
});
