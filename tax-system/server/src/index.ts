import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { TaxSystem } from './TaxSystem';
import { ProductData } from './types';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const taxSystem = new TaxSystem();

app.get('/api/tax-system', (req, res) => {
    taxSystem.initSystem();
    const listStates = taxSystem?.statesInfo?.listStates;

    res.status(201).json(listStates);
});

app.post('/api/tax-system/calculate', (req, res) => {
    const productData: ProductData = {
        year: req.body.year,
        fiscalState: req.body.fiscalState,
        baseValue: req.body.baseValue,
    };

    taxSystem.getProductTaxes(productData)

    const productInfo = taxSystem.product?.productData;

    if (productInfo) {
        res.status(201).json({
            productInfo,
        });
        return;
    }
    
    res.status(400).json({
        message: 'Error initializing tax system',
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
