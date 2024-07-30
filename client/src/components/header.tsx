import { Button } from "@mui/material";
import { styled } from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CachedIcon from "@mui/icons-material/Cached";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const resetBtnStyle = {
  borderColor: "#333",
  color: "#333",
  backgroundColor: "#E3E3E3",
};

const generateReportBtnStyle = { backgroundColor: "#2C2A4A" };

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Linkedin Data Ad Hoc</h1>
        <h2>Report</h2>
      </div>
      <div>
        <Button title="Reset" variant="outlined" sx={resetBtnStyle}>
          <CachedIcon />
        </Button>
        <Button
          startIcon={<VisibilityIcon />}
          variant="contained"
          sx={generateReportBtnStyle}
        >
          Generate Report
        </Button>
      </div>
    </HeaderContainer>
  );
}
