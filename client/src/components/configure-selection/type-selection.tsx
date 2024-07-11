import { ConfigurationSelection } from "./style/selection-box-style";

export function TypeSelection({
  data_key,
  label,
  icon,
  value,
  setValue,
}: {
  data_key: string;
  setValue: (value: string) => void;
  value: string;
  label: string;
  icon: JSX.Element;
}) {
  return (
    <ConfigurationSelection
      onClick={() => setValue(data_key)}
      style={{
        backgroundColor: value === data_key ? "#4F518C" : "#fff",
        color: value === data_key ? "#FFF" : "#333"
      }}
    >
      {icon}
      <p>{label}</p>
    </ConfigurationSelection>
  );
}
