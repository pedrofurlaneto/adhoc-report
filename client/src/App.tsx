import { Button } from "@mui/material";
import { ConfigureBox } from "./components/configure-box/configure-box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CachedIcon from "@mui/icons-material/Cached";
import { useState } from "react";
import { AttributesBox } from "./components/attributes-box/attributes-box";
import { AppComponents } from "./style/app";

function App() {
  const { AppBody, ContentWrapper, HeaderDecorator, MainContainer } =
    AppComponents;

  const [config, setConfig] = useState("tables");

  return (
    <AppBody>
      <HeaderDecorator />
      <MainContainer>
        <header>
          <ContentWrapper>
            <div>
              <h1>Linkedin Data Ad Hoc</h1>
              <h2>Report</h2>
            </div>
            <div style={{ marginBottom: ".3%" }}>
              <Button
                title="Reset"
                variant="outlined"
                sx={{
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
                sx={{ backgroundColor: "#2C2A4A" }}
              >
                Generate Report
              </Button>
            </div>
          </ContentWrapper>
        </header>

        <ContentWrapper>
          <ConfigureBox
            configurationState={config}
            setConfigurationState={setConfig}
          />
          <AttributesBox configType={config} />
        </ContentWrapper>
      </MainContainer>
    </AppBody>
  );
}

export default App;
