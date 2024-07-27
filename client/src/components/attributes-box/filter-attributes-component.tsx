import { Combobox } from "./components/combobox";
import { Option } from "../models/option";
import { Input } from "./components/input";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const OPERATIONS: Option[] = [
  {
    key: "gte",
    label: "Greater than or equal",
  },
  {
    key: "gt",
    label: "Greater than",
  },
  {
    key: "lte",
    label: "Less than or equal",
  },
  {
    key: "lt",
    label: "Less than",
  },
  {
    key: "equal",
    label: "Equal",
  },
];

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
          <Combobox inputLabel="Operation" options={OPERATIONS} />
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

export function FilterAttributesComponent({ columns }: Props) {
  const [filters, setFilters] = useState<FilterSelectionProps[]>([
    { id: Date.now().toString(), columns },
  ]);

  const addFilterForm = () => {
    setFilters([
      ...filters,
      { id: Date.now().toString(), columns },
    ]);
  };

  const removeFilterForm = (id: string) => {
    setFilters((values) => values.filter((value) => value.id !== id));
  };

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
