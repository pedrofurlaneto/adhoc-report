import { FilterOperationType } from "./filter-operation-types";

export type Filter = {
    id: string;
    column: string;
    value: string;
    operation: FilterOperationType;
};