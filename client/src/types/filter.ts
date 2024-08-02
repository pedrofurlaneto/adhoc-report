import { FilterOperationType } from "./filter-operation-types";

export type Filter = {
    column: string;
    value: string;
    operation: FilterOperationType;
};