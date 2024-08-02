import { Button } from "@mui/material";
import { styled } from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CachedIcon from "@mui/icons-material/Cached";

const HeaderContainer = styled.header`  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px 0;
`;

const Titles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
  }
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
      <Titles>
        <h1>Linkedin Data Ad Hoc</h1>
        <h2>Report</h2>
      </Titles>
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
