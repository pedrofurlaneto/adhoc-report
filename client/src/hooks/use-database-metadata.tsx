import { COLUMNS_MAP_BY_TABLE } from "../mock"
import { Column } from "../types/column";

interface DataBaseMetadata {
    tables: string[],
    columns: Column[]
}

export function useDataBaseMetadata(): DataBaseMetadata {
    const columns: Column[] = [];

    for (const table in COLUMNS_MAP_BY_TABLE) {
        for (const column of COLUMNS_MAP_BY_TABLE[table]) {
            columns.push({table, name: column});
        }
    }
    
    return {
        tables: Object.keys(COLUMNS_MAP_BY_TABLE),
        columns 
    }
}