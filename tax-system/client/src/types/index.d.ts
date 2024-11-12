export type ResultDataTypes = {
  totalValue: number;
  fiscalState: string;
} | null;

export type CalcResultsTypes = {
  resultData: ResultDataTypes;
  baseValue: string;
};

export type StateOption = { label: string; name: string };
