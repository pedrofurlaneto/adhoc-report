import { TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  label: string;
};

export function Input({ label }: Props) {
  const [value, setValue] = useState("");

  return (
    <TextField
      id="filter-value"
      label={label}
      variant="outlined"
      sx={{ m: 1, minWidth: 120 }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
