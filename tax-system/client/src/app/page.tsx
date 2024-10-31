"use client";
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Select,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";
import CalcResults from "@/components/calcResults";
import styles from "../styles/home.module.scss";
import { ResultDataTypes } from "@/types";


const states = [
  { label: "California", value: "california" },
  { label: "Florida", value: "florida" },
  { label: "Illinois", value: "illinois" },
  { label: "Ohio", value: "ohio" },
  { label: "New York", value: "new_york" },
];

const years = Array.from({ length: 10 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);

export default function Home() {
  const [year, setYear] = useState("");
  const [state, setState] = useState("");
  const [baseValue, setBaseValue] = useState("");
  const [resultData, setResultData] = useState<ResultDataTypes>(null);

  const API_URL = "http://localhost:4000/api/tax-system";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const productData = {
      year,
      fiscalState: state,
      baseValue: parseFloat(baseValue),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (data.product) {
        setResultData({
          totalValue: data.product.totalValue,
          fiscalState: data.product.fiscalState,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="xs" className={styles.container}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        className={styles.title}
      >
        Tax System
      </Typography>
      <Typography variant="body1" align="center" className={styles.subtext}>
        Calculate the taxes for your product
      </Typography>

      <form onSubmit={handleSubmit} className={styles.form}>
        <FormControl fullWidth className={styles.formControl}>
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

        <FormControl fullWidth className={styles.formControl}>
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

        <FormControl fullWidth className={styles.formControl}>
          <TextField
            label="Base Value (before taxes)"
            variant="outlined"
            type="number"
            value={baseValue}
            onChange={(e) => setBaseValue(e.target.value)}
            required
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          className={styles.submitButton}
        >
          Calculate Taxes
        </Button>
      </form>

      {resultData && (
        <CalcResults resultData={resultData} baseValue={baseValue} />
      )}
    </Container>
  );
}
