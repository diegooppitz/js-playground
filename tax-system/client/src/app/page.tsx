"use client"
import { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Select, Button, InputLabel, FormControl } from '@mui/material';

const states = [
  { label: 'California', value: 'CA' },
  { label: 'New York', value: 'NY' },
  { label: 'Texas', value: 'TX' },
];

const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

export default function Home() {
  const [year, setYear] = useState('');
  const [state, setState] = useState('');
  const [baseValue, setBaseValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ year, state, baseValue });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Tax System
      </Typography>
      <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
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
    </Container>
  );
}
