import TableChartIcon from "@mui/icons-material/TableChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SettingsIcon from "@mui/icons-material/Settings";

export const configurationTypes = [
    {
      label: "Tables",
      key: "tables",
      icon: <TableChartIcon sx={{fontSize: '1.75em', marginBottom: '-7.5%'}} />,
    },
    {
      label: "Filters",
      key: "filters",
      icon: <FilterAltIcon sx={{fontSize: '1.75em', marginBottom: '-7.5%'}} />,
    },
    {
      label: "Aggregations",
      key: "aggs",
      icon: <SettingsIcon sx={{fontSize: '1.75em', marginBottom: '-7.5%'}} />,
    },
  ];