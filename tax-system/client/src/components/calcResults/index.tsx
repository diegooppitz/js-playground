"use client";
import { Typography, Box } from "@mui/material";
import { CalcResultsTypes } from "@/types";
import styles from "./calcResults.module.scss";

const CalcResults: React.FC<CalcResultsTypes> = ({ resultData, baseValue }) => {
  return (
    <>
      {resultData ? (
        <div className={styles.resultContainer}>
          <div className={styles.resultHeader}>
            <Typography variant="h6" color="primary">
              Taxes Calculation Result
            </Typography>
          </div>
          <Box className={styles.resultTable}>
            <Box className={styles.row}>
              <Typography variant="body2" color="textSecondary" className={styles.label}>
                Base Value:
              </Typography>
              <Typography variant="body1" className={styles.value}>
                ${baseValue}
              </Typography>
            </Box>
            <Box className={styles.row}>
              <Typography variant="body2" color="textSecondary" className={styles.label}>
                Total Value (with Taxes):
              </Typography>
              <Typography variant="body1" className={styles.value}>
                ${resultData.totalValue}
              </Typography>
            </Box>
            <Box className={styles.row}>
              <Typography variant="body2" color="textSecondary" className={styles.label}>
                Fiscal State:
              </Typography>
              <Typography variant="body1" className={styles.value}>
                {resultData.fiscalState}
              </Typography>
            </Box>
          </Box>
        </div>
      ) : null}
    </>
  );
};

export default CalcResults;
