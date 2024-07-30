import { styled } from "styled-components";
import { ConfigurationType } from "../../app/types/configuration-types";
import { useConfigure } from "../../hooks/use-configure";
import { BaseSection } from "../base-section";
import { TableAttributesComponent } from "./table-attributes-component";

const Section = styled(BaseSection) `
  width: 60%;
`

export function AttributesBox() {
  const { type } = useConfigure();

  const componentsByConfigType: Record<string, JSX.Element> = {
    [ConfigurationType.TABLES]: <TableAttributesComponent />,
    [ConfigurationType.FILTERS]: <></>,
    [ConfigurationType.AGGS]: <></>,
  };

  return (
    <Section style={{ width: "60%" }}>
      {componentsByConfigType[type]}
    </Section>
  );
}
