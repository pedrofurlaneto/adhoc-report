import { useCallback } from "react";
import { useDataBaseMetadata } from "../hooks/use-database-metadata";
import { useReportMetadata } from "../hooks/use-report-metadata";
import { AttributeContainer } from "./attribute-container";
import { AttributesList } from "./attribute-list";
import { AttributeItem } from "./attribute-item";

export function TableList() {
    const { tables } = useDataBaseMetadata();
    const { setTables: setSelectedTables } = useReportMetadata();
  
    const handleOnTablesChange = useCallback(
      (value: string, isChecked: boolean) => {
        setSelectedTables((values) => {
          if (!isChecked) {
            return values.filter((curr: string) => curr !== value);
          }
  
          return [...values, value];
        });
      },
      [setSelectedTables]
    );
  
    return (
      <AttributeContainer>
        <AttributesList>
          <h4>Tables</h4>
          {tables?.length > 0 &&
            tables.map((tableName) => (
              <AttributeItem
                key={tableName}
                value={tableName}
                onChange={handleOnTablesChange}
              />
            ))}
        </AttributesList>
      </AttributeContainer>
    );
  }
  