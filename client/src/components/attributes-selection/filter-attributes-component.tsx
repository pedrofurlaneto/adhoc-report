import { Combobox } from "./components/combobox";
import { Option } from "../models/option";
import { Input } from "./components/input";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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

export function FilterAttributesComponent({ columns }: Props) {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ display: "inline" }}>
          <Combobox inputLabel="Operation" options={OPERATIONS} />
          <Combobox inputLabel="Column" options={columns} />
        </div>
        <Input label="Value" />
        <div>
          <IconButton aria-label="delete">
            <AddCircleIcon />
          </IconButton>
        </div>
      </div>

      <div>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
