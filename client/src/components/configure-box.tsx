import { BaseSection } from "./base-section";
import { BaseTitle } from "./base-title";
import { styled } from "styled-components";
import { useConfigure } from "../hooks/use-configure";

import TableChartIcon from "@mui/icons-material/TableChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { ConfigurationType } from "../types/configuration-types";

const Section = styled(BaseSection)`
  width: 35%;
`;

const ConfigurationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
  justify-items: center;
`;

interface ConfigurationItemProps {
  selected: boolean;
}

const ConfigurationItem = styled.li<ConfigurationItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 200px;
  border-radius: 30px;
  font-size: 20px;
  background-color: ${(props) => (props.selected ? "#4f518c" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  border: 1px solid;
  border-color: ${(props) => (props.selected ? "transparent" : "#ddd")};

  cursor: pointer;

  > svg {
    width: 42px;
    height: 39px;
  }
`;

export function ConfigureBox() {
  const { type, setType } = useConfigure();

  const handleTypeChange = (value: ConfigurationType) => setType(value);

  return (
    <Section>
      <BaseTitle align='center'>Configure</BaseTitle>

      <ConfigurationList>
        <ConfigurationItem
          selected={type === ConfigurationType.TABLES}
          onClick={() => handleTypeChange(ConfigurationType.TABLES)}
        >
          <TableChartIcon />
          <p>Tables</p>
        </ConfigurationItem>
        <ConfigurationItem
          selected={type === ConfigurationType.FILTERS}
          onClick={() => handleTypeChange(ConfigurationType.FILTERS)}
        >
          <FilterAltIcon />
          <p>Filters</p>
        </ConfigurationItem>
        <ConfigurationItem
          selected={type === ConfigurationType.AGGS}
          onClick={() => handleTypeChange(ConfigurationType.AGGS)}
        >
          <SettingsIcon />
          <p>Aggregations</p>
        </ConfigurationItem>
      </ConfigurationList>
    </Section>
  );
}
