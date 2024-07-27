import { BoxSection } from "../box-section";
import { BoxTitle } from "../box-title";
import { TableAttributesComponent } from "./table-attributes-component";
import { FilterAttributesComponent } from "./filter-attributes-component";
import { COLUMNS_MAP_BY_TABLE } from "../../mock";

type ComponentPropsByConfigType = Record<
  string,
  {
    title: string;
    child: JSX.Element;
  }
>;

export interface IAttributesBox {
  configType: string;
}

export function AttributesBox({ configType }: IAttributesBox) {
  const { title, child } = getComponentByConfigType(configType);

  return (
    <BoxSection style={{ width: "60%" }}>
      <BoxTitle title={title} />

      {child}
    </BoxSection>
  );
}

function getComponentByConfigType(configType: string): {
  title: string;
  child: JSX.Element;
} {
  const columnOptions = [];

  for (const tableName in COLUMNS_MAP_BY_TABLE) {
    for (const columnName of COLUMNS_MAP_BY_TABLE[tableName]) {
      columnOptions.push({
        key: columnName,
        label: `(${tableName}) ${columnName}`,
      });
    }
  }

  const componentsByConfigType: ComponentPropsByConfigType = {
    tables: {
      title: "Data Tables Attributes",
      child: <TableAttributesComponent />,
    },
    filters: {
      title: "Filter Attributes",
      child: <FilterAttributesComponent columns={columnOptions} />,
    },
    aggs: {
      title: "Aggregations Attributes",
      child: <></>,
    },
  };

  return componentsByConfigType[configType];
}
