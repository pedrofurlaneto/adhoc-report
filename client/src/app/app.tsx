import { AttributesBox } from "../components/attributes-box/attributes-box";
import { styled } from "styled-components";
import { ConfigureBox } from "../components/configure-box";
import { Header } from "../components/header";
import { ConfigureContextProvider } from "../contexts/configure-context";
import { ReportContextProvider } from "../contexts/report-context";

const AppBody = styled.main`
  min-height: 100vh;
  background: #f5f5f5;
`;

const Container = styled.section`
  color: #333;
  padding: 0 30px;
`;

const HeaderDecorator = styled.div`
  background-color: #907ad6;
  height: 25px;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  height: 70vh;
`;

function App() {
  return (
    <AppBody>
      <HeaderDecorator />
      <Container>
        <Header />
        <Wrapper>
          <ReportContextProvider>
            <ConfigureContextProvider>
              <ConfigureBox />
              <AttributesBox />
            </ConfigureContextProvider>
          </ReportContextProvider>
        </Wrapper>
      </Container>
    </AppBody>
  );
}

export default App;
