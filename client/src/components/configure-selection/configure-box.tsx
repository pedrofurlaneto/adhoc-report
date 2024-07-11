import TableChartIcon from "@mui/icons-material/TableChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { Wrapper } from "./style/wrapper";
import { Section } from "../style/section";
import { ConfigurationSelection } from "./style/selection-box-style";
import { TypeSelection } from "./type-selection";
import { useState } from "react";

const configureTypes = [
  {
    label: "Tables",
    key: "tables",
    icon: <TableChartIcon sx={{fontSize: '1.75em', marginBottom: '-7.5%'}} />,
  },
  {
    label: "Filters",
    key: "filters",
    icon: <FilterAltIcon sx={{fontSize: '1.75em', marginBottom: '-7.5%'}} />,
  },
  {
    label: "Aggregations",
    key: "aggs",
    icon: <SettingsIcon sx={{fontSize: '1.75em', marginBottom: '-7.5%'}} />,
  },
];

export function ConfigureBox() {
  const [configureType, setConfigureType] = useState('tables');

  return (
    <Section style={{ width: "30%", textAlign: 'center' }}>
      <h3>Configure</h3>
      <hr />

      <Wrapper>
        {configureTypes.map((type) => (
          <TypeSelection
            value={configureType}
            setValue={setConfigureType}
            icon={type.icon}
            data_key={type.key}
            label={type.label}
            key={type.key}
          />
        ))}

        {configureTypes.length % 2 !== 0 && <ConfigurationSelection />}
      </Wrapper>
    </Section>
  );
}
