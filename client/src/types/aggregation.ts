import { AggregationType } from "./aggregation-types";

export type Aggregation = {
    column: string;
    aggregation: AggregationType;
};