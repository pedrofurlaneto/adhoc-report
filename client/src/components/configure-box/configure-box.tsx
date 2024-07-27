import { Wrapper } from "./style/wrapper";
import { BoxSection } from "../box-section";
import { configurationTypes } from "./static/configuration-types";
import { BoxTitle } from "../box-title";
import { ConfigurationTypeCheckbox } from "./components/configuration-type-checkbox"


export interface IConfigureBoxProps {
  configurationState: string;
  setConfigurationState: (value: string) => void;
}

export function ConfigureBox({
  configurationState,
  setConfigurationState,
}: IConfigureBoxProps) {
  return (
    <BoxSection style={{ width: "30%", textAlign: "center" }}>
      <BoxTitle title="Configure" />

      <Wrapper>
        {configurationTypes.map((type) => (
          <ConfigurationTypeCheckbox
            value={configurationState}
            setValue={setConfigurationState}
            icon={type.icon}
            data_key={type.key}
            label={type.label}
            key={type.key}
          />
        ))}
      </Wrapper>
    </BoxSection>
  );
}
