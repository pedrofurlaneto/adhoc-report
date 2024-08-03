import { styled } from "styled-components";
import { ConfigurationType } from "../types/configuration-types";
import { useConfigure } from "../hooks/use-configure";
import { BaseSection } from "./base-section";
import { TableAttributes } from "./table-attributes";
import { FilterAttributes } from "./filter-attributes";

const Section = styled(BaseSection)`
  width: 60%;
`;

export function AttributesBox() {
  const { type } = useConfigure();

  const componentsByConfigType: Record<string, JSX.Element> = {
    [ConfigurationType.TABLES]: <TableAttributes />,
    [ConfigurationType.FILTERS]: <FilterAttributes />,
    [ConfigurationType.AGGS]: <></>,
  };

  return <Section>{componentsByConfigType[type]}</Section>;
}
