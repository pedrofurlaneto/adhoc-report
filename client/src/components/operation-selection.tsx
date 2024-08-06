import { useState } from "react";
import { FilterOperationType } from "../types/filter-operation-types";
import { useReportMetadata } from "../hooks/use-report-metadata";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface OperationProps {
  id: string;
}

export function OperationSelection({ id }: OperationProps) {
  const [operation, setOperation] = useState<FilterOperationType>(0);
  const { filters, setFilters } = useReportMetadata();

  const handleOperationFilterChange = (valueChanged: FilterOperationType) => {
    setOperation(valueChanged);

    setFilters(
      filters.map((filter) => {
        if (filter.id === id) {
          return { ...filter, operation: valueChanged };
        }

        return filter;
      })
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: "100%" }} size="medium">
      <InputLabel id="operation">Operation</InputLabel>
      <Select
        labelId="operation-label"
        id="operation"
        value={operation}
        label="Filter Operation"
        onChange={(e: SelectChangeEvent<FilterOperationType>) =>
          handleOperationFilterChange(e.target.value)
        }
      >
        <MenuItem value={FilterOperationType.GT} key={FilterOperationType.GT}>
          Greater than
        </MenuItem>
        <MenuItem value={FilterOperationType.GTE} key={FilterOperationType.GTE}>
          Greater than or equal
        </MenuItem>
        <MenuItem
          value={FilterOperationType.EQUAL}
          key={FilterOperationType.EQUAL}
        >
          Equal
        </MenuItem>
        <MenuItem value={FilterOperationType.LTE} key={FilterOperationType.LTE}>
          LTE
        </MenuItem>
        <MenuItem value={FilterOperationType.LT} key={FilterOperationType.LT}>
          LT
        </MenuItem>
      </Select>
    </FormControl>
  );
}
