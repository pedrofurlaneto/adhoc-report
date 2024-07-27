import { styled } from "styled-components";

const AppBody = styled.section`
  height: 100vh;
  background: #f5f5f5;
`

const MainContainer = styled.section`
  color: #333;
  padding: 0 1%;
`;

const HeaderDecorator = styled.div`
  background-color: #907ad6;
  width: 100%;
  height: 4vh;
`;

const ContentWrapper = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const AppComponents = {
    AppBody,
    MainContainer,
    HeaderDecorator,
    ContentWrapper
}