import { Button } from "@mui/material";
import { ConfigureBox } from "./components/configure-selection/configure-box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CachedIcon from "@mui/icons-material/Cached";
import { useState } from "react";
import { AttributesSection } from "./components/attributes-selection/attributes-section";

function App() {
  const [config, setConfig] = useState("tables");

  return (
    <div style={{ background: "#F5F5F5", height: "100vh", color: "#333" }}>
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
        <ConfigureBox configureType={config} setConfigureType={setConfig} />
        <AttributesSection configType={config}/>
      </div>
    </div>
  );
}

export default App;
