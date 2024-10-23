"use client"
import { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Select, Button, InputLabel, FormControl } from '@mui/material';

const states = [
  { label: 'California', value: 'california' },
  { label: 'Florida', value: 'florida' },
  { label: 'Illinois', value: 'illinois' },
  { label: 'Ohio', value: 'ohio' },
  { label: 'New York', value: 'new_york' },
];

const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

type ResultData = {
  totalValue: number;
  fiscalState: string;
} | null;

export default function Home() {
  const [year, setYear] = useState('');
  const [state, setState] = useState('');
  const [baseValue, setBaseValue] = useState('');
  const [result, setResult] = useState<ResultData>(null);

  const API_URL = 'http://localhost:4000/api/tax-system';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const productData = {
      year,
      fiscalState: state,
      baseValue: parseFloat(baseValue),
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (data.product) {
        setResult({
          totalValue: data.product.totalValue,
          fiscalState: data.product.fiscalState,
        });
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Tax System
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Please fill out the form below to calculate the taxes for your product.
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id="year-label">Year of the Product</InputLabel>
          <Select
            labelId="year-label"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            label="Year of the Product"
            required
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            value={state}
            onChange={(e) => setState(e.target.value)}
            label="State"
            required
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <TextField
            label="Base Value (before taxes)"
            variant="outlined"
            type="number"
            value={baseValue}
            onChange={(e) => setBaseValue(e.target.value)}
            required
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Calculate Taxes
        </Button>
      </form>

      {result && (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Your product with a base value of ${baseValue} has a total value with the taxes of ${result.totalValue} after taxes in {result.fiscalState}.
        </Typography>
      )}
    </Container>
  );
}
