import { useState } from "react";
import { COLUMNS_MAP_BY_TABLE } from "../../mock";
import { AttributesBox } from "./style/attributes-box";
import { AttributeCheckbox } from "./components/attributes-checkbox";

function listTables() {
  return Object.keys(COLUMNS_MAP_BY_TABLE);
}

export function TableAttributesComponent() {
  const [selectedTables, setSelectedTables] = useState<string[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const tables = listTables();

  console.log(selectedColumns)

  const handleCheckboxChanges = (
    isChecked: boolean,
    associatedTable: string,
    updateFn: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    updateFn((values) => {
      if (!isChecked) {
        const tableIndex = values.indexOf(associatedTable);
        values.splice(tableIndex, 1);

        return [...values];
      }

      values.push(associatedTable);

      return [...values];
    });
  };

  return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <AttributesBox style={{ width: "45%" }}>
          <h4>Tables</h4>

          {tables.length > 0 &&
            tables.map((tableName) => (
              <AttributeCheckbox
                key={tableName}
                value={tableName}
                label={tableName}
                setValue={(isChecked, value) =>
                  handleCheckboxChanges(isChecked, value, setSelectedTables)
                }
              />
            ))}
        </AttributesBox>

        <AttributesBox style={{ width: "53%" }}>
          {selectedTables.length > 0 &&
            selectedTables.map((tableName) => {
              return (
                <>
                  <h4>{tableName}</h4>
                  {COLUMNS_MAP_BY_TABLE[tableName].map((columnName) => (
                    <AttributeCheckbox
                      key={`${tableName}_${columnName}`}
                      value={columnName}
                      label={columnName.replace("_", " ")}
                      setValue={(isChecked, value) =>
                        handleCheckboxChanges(
                          isChecked,
                          value,
                          setSelectedColumns
                        )
                      }
                    />
                  ))}
                </>
              );
            })}
        </AttributesBox>
      </div>
  );
}
