import { styled } from "styled-components";

export interface IConfigurationTypeCheckboxProps {
  data_key: string;
  setValue: (value: string) => void;
  value: string;
  label: string;
  icon: JSX.Element;
}

export function ConfigurationTypeCheckbox({
  data_key,
  label,
  icon,
  value,
  setValue,
}: IConfigurationTypeCheckboxProps) {
  return (
    <ConfigurationTypeSelection
      onClick={() => setValue(data_key)}
      style={{
        backgroundColor: value === data_key ? "#4F518C" : "#fff",
        color: value === data_key ? "#FFF" : "#333",
      }}
    >
      {icon}
      <p>{label}</p>
    </ConfigurationTypeSelection>
  );
}

export const ConfigurationTypeSelection = styled.div`
  width: 47%;
  height: 18vh;
  margin: 1.5% 1%;
  border: 1px solid #ddd;
  border-radius: 30px;

  font-size: 1.25em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &.p {
    margin: 5px 0;
  }

  &.svg {
    font-size: 2em;
  }
`;