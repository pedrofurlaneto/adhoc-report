import { Button } from "@mui/material";
import { TableAttributesComponent } from "./components/attributes-selection/table-attributes/table-attributes-component";
import { ConfigureBox } from "./components/configure-selection/configure-box";
import { COLUMNS_MAP_BY_TABLE } from "./mock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CachedIcon from "@mui/icons-material/Cached";

// const configurationComponentByConfigureType = {
//   'tables': <AttributesComponent/>
// }

function App() {
  return (
    <div style={{ background: "#F5F5F5", height: '100vh' }}>
      <div
        style={{ backgroundColor: "#907AD6", width: "100%", height: "4vh" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>Linkedin Data Ad Hoc</h1>
          <h2>Report</h2>
        </div>
        <div>
          <Button
            title="Reset"
            variant="outlined"
            style={{
              borderColor: "#333",
              color: "#333",
              backgroundColor: "#E3E3E3",
            }}
          >
            <CachedIcon />
          </Button>
          <Button
            startIcon={<VisibilityIcon />}
            variant="contained"
            style={{ backgroundColor: "#2C2A4A" }}
          >
            Generate Report
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ConfigureBox />
        <TableAttributesComponent tables={Object.keys(COLUMNS_MAP_BY_TABLE)} />
        {/* <ReportTable
          content={tableContent.rows}
          headers={tableContent.headers}
        /> */}
      </div>
    </div>
  );
}

export default App;
