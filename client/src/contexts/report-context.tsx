import { createContext, ReactNode, useState } from "react";
import { Aggregation } from "../types/aggregation";
import { Filter } from "../types/filter";

export const ReportContext = createContext({
  tables: Array<string>(),
  columns: Array<string>(),
  filters: Array<Filter>(),
  aggregation: {} as Aggregation,
  setTables: (values: string[]) => {
  },
  setColumns: (values: string[]) => {
  },
  setFilters: (values: Filter[]) => {
  },
  setAggregation: (value: Aggregation) => {
  },
});

interface ReportContextProviderProps {
  children: ReactNode;
}

export function ReportContextProvider({
  children,
}: ReportContextProviderProps) {
  const [tables, setTables] = useState<string[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [aggregation, setAggregation] = useState<Aggregation>(
    {} as Aggregation
  );

  return (
    <ReportContext.Provider
      value={{
        tables,
        columns,
        filters,
        aggregation,
        setTables,
        setColumns,
        setFilters,
        setAggregation,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
