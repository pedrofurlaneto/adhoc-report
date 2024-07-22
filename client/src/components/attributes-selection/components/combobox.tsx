import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Option } from "../../models/option";

type Props = {
  inputLabel: string;
  options: Option[];
};

export function Combobox({ inputLabel, options }: Props) {
  const [value, setValue] = useState("");

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
      <InputLabel id={inputLabel}>{inputLabel}</InputLabel>
      <Select
        labelId={`${inputLabel}-label`}
        id={inputLabel}
        value={value}
        label="Coluna do filtro"
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map(({key, label}) => (
          <MenuItem value={key} key={key}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
