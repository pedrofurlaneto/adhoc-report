import { useContext } from "react";
import { ReportContext } from "../contexts/report-context";

export function useReportMetadata() {
    return useContext(ReportContext);
}