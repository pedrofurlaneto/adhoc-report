import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";

const AttributeItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.5% 5%;

  border: 1px solid #ddd;
  border-radius: 10px;

  text-transform: capitalize;

  cursor: pointer;
`;

interface AttributeItemProps {
  value: string;
  onChange: (value: string, isChecked: boolean) => void;
}

export function AttributeItem({ value, onChange }: AttributeItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);

    onChange(value, newIsChecked);
  };

  return (
    <AttributeItemContainer onClick={handleCheckboxChange}>
      <FormControlLabel
        control={<Checkbox />}
        label={value}
        labelPlacement="end"
        checked={isChecked}
      />
    </AttributeItemContainer>
  );
}