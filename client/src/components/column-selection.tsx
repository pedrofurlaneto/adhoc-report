import { useState } from "react";
import { Column } from "../types/column";
import { useReportMetadata } from "../hooks/use-report-metadata";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface ColumnSelectionProps {
  id: string;
  columns: Column[];
}

export function ColumnSelection({ id, columns }: ColumnSelectionProps) {
  const [column, setColumn] = useState<string>("");
  const { filters, setFilters } = useReportMetadata();

  const handleColumnFilterChange = (valueChanged: string) => {
    setColumn(valueChanged);

    setFilters(
      filters.map((filter) => {
        if (filter.id === id) {
          return { ...filter, column: valueChanged };
        }

        return filter;
      })
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
      <InputLabel id="column">Column</InputLabel>
      <Select
        labelId="column-label"
        id="column"
        value={column}
        label="Coluna do filtro"
        onChange={(e: SelectChangeEvent<string>) =>
          handleColumnFilterChange(e.target.value)
        }
      >
        {columns.map((column) => (
          <MenuItem
            value={`${column.table}.${column.name}`}
            key={`${column.table}.${column.name}`}
          >
            {`${column.table}.${column.name}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
