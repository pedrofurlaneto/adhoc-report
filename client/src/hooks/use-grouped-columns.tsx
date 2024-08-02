import { useMemo } from "react";
import { Column } from "../types/column";

export function useGroupedColumns(tables: string[], columns: Column[]) {
  return useMemo(() => {
    const group: Record<string, Column[]> = {};

    for (const table of tables) {
      group[table] = columns.filter((column) => column.table === table);
    }

    return group;
  }, [tables, columns]);
}
