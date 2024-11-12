"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
import styles from "@/styles/home.module.scss";
import CalcResults from "@/components/calcResults";
import { ResultDataTypes, StateOption } from "@/types";
import { API_URL } from "@/utils";

export default function Home() {
  const [listStates, setListStates] = useState<StateOption[]>([]);
  const [year, setYear] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [baseValue, setBaseValue] = useState<string>("");
  const [resultData, setResultData] = useState<ResultDataTypes | null>(null);

  const years = Array.from({ length: 10 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  const fetchStates = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
      });

      const data = await response.json();
      if (data && Array.isArray(data)) {
        setListStates(data);
      }
    } catch (error) {
      console.error(error);
      showErrorToast();
    }
  };

  const getStateLabel = (fiscalState: string): string => {
    const selectedState = listStates.find(
      (state) => fiscalState === state.name
    );
    return selectedState ? selectedState.label : "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const productData = {
      year,
      fiscalState: state,
      baseValue: parseFloat(baseValue),
    };

    try {
      const response = await fetch(`${API_URL}calculate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();
      const productInfo = data?.productInfo;

      if (productInfo) {
        setResultData({
          totalValue: productInfo.totalValue,
          fiscalState: getStateLabel(productInfo.fiscalState),
        });
      }
    } catch (error) {
      showErrorToast();
    }
  };

  const showErrorToast = () => {
    toast.error("OPS, something is wrong!", {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <Container maxWidth="xs" className={styles.container}>
      <ToastContainer />
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
            {listStates.length > 0 &&
              listStates.map((option) => (
                <MenuItem key={option.name} value={option.name}>
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
