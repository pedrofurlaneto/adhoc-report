import { COLUMNS_MAP_BY_TABLE } from "../../mock";
import { Section } from "../style/section";
import { FilterAttributesComponent } from "./filter-attributes-component";
import { TableAttributesComponent } from "./table-attributes-component";

type Props = {
  configType: string;
};

type ComponentPropsByConfigType = Record<
  string,
  {
    title: string;
    child: JSX.Element;
  }
>;

function listTables() {
  return Object.keys(COLUMNS_MAP_BY_TABLE);
}

export function AttributesSection({ configType }: Props) {
  const tables = listTables();

  const componentByConfigType: ComponentPropsByConfigType = {
    tables: {
      title: "Data Tables Attributes",
      child: <TableAttributesComponent tables={tables} />,
    },
    filters: {
      title: "Filter Attributes",
      child: <FilterAttributesComponent />,
    },
    aggs: {
      title: "Aggregations Attributes",
      child: <></>,
    },
  };

  const { title, child } = componentByConfigType[configType];

  return (
    <Section style={{ width: "60%" }}>
      <h3>{title}</h3>
      <hr style={{ margin: "1% 0 0 0" }} />

      {child}
    </Section>
  );
}
