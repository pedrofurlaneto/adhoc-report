import { useEffect, useState } from "react";
import { AttributeSelection } from "../style/attribute-selection";
import { Checkbox, FormControlLabel } from "@mui/material";

export function AttributeCheckbox({
  value,
  label,
  setValue
}: {
  value: string;
  label: string;
  setValue: (isChecked: boolean, value: string) => void;
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setValue(checked, value);
  }, [checked]);

  return (
    <AttributeSelection id="table1">
      <FormControlLabel
        control={<Checkbox />}
        value={value}
        label={label}
        labelPlacement="end"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
    </AttributeSelection>
  );
}
