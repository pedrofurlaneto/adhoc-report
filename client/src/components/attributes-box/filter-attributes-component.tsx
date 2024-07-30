import { Combobox } from "./components/combobox";
import { Option } from "../models/option";
import { Input } from "./components/input";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { COLUMNS_MAP_BY_TABLE } from "../../mock";
import { filterOperations } from "./static/filter-operations";

type Props = { columns: Option[] };

type FilterSelectionProps = {
  id: string;
  columns: Option[];
};

function FilterSelection({ id, columns }: FilterSelectionProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "inline" }}>
          <Combobox inputLabel="Operation" options={filterOperations} />
          <Combobox inputLabel="Column" options={columns} />
        </div>
        <Input label="Value" />
      </div>
      <div>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
}

export function FilterAttributesComponent() {
  const columnOptions: Option[] = [];

  const [filters, setFilters] = useState<FilterSelectionProps[]>();

  for (const tableName in COLUMNS_MAP_BY_TABLE) {
    for (const columnName of COLUMNS_MAP_BY_TABLE[tableName]) {
      columnOptions.push({
        key: columnName,
        label: `(${tableName}) ${columnName}`,
      });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <div>
        {filters.map((prop) => (
          <FilterSelection columns={prop.columns} id={prop.id} key={prop.id} />
        ))}
        <IconButton onClick={() => addFilterForm()} aria-label="add">
          <AddCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}
