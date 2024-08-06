import { useState } from "react";
import { useReportMetadata } from "../hooks/use-report-metadata";
import { TextField } from "@mui/material";

interface InputValueProps {
  id: string;
}

export function InputValue({ id }: InputValueProps) {
  const [value, setValue] = useState("");
  const { filters, setFilters } = useReportMetadata();

  const handleValueFilterChange = (valueChanged: string) => {
    setValue(valueChanged);

    setFilters(
      filters.map((filter) => {
        if (filter.id === id) {
          return { ...filter, value: valueChanged };
        }

        return filter;
      })
    );
  };

  return (
    <TextField
      sx={{ m: 1, minWidth: "100%" }}
      id="filter-value"
      label="Value"
      variant="outlined"
      value={value}
      onChange={(e) => handleValueFilterChange(e.target.value)}
    />
  );
}
