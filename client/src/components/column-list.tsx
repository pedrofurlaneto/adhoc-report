import { useCallback } from "react";
import { useDataBaseMetadata } from "../hooks/use-database-metadata";
import { useGroupedColumns } from "../hooks/use-grouped-columns";
import { useReportMetadata } from "../hooks/use-report-metadata";
import { AttributeContainer } from "./attribute-container";
import { AttributesList } from "./attribute-list";
import { AttributeItem } from "./attribute-item";

export function ColumnList() {
  const { columns } = useDataBaseMetadata();
  const { tables: selectedTables, setColumns: setSelectedColumns } =
    useReportMetadata();

  const groupedColumns = useGroupedColumns(selectedTables, columns);

  const handleOnColumnsChange = useCallback(
    (value: string, isChecked: boolean) => {
      setSelectedColumns((values) => {
        if (!isChecked) {
          return values.filter((curr: string) => curr !== value);
        }

        return [...values, value];
      });
    },
    [setSelectedColumns]
  );

  return (
    <AttributeContainer>
      {Object.keys(groupedColumns).map((table) => (
        <AttributesList>
          <h4>{table}</h4>

          {groupedColumns[table].map((column) => (
            <AttributeItem
              value={column.name}
              key={column.name}
              onChange={handleOnColumnsChange}
            />
          ))}
        </AttributesList>
      ))}
    </AttributeContainer>
  );
}
