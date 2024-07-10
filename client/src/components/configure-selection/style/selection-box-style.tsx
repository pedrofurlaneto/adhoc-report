import { styled } from "styled-components";

export const ConfigurationSelection = styled.div`
  width: 45%;
  height: 15vh;
  margin: 0 1.5% 2% 0;
  border: 1px solid #ddd;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &.p {
    margin: 5px 0;
  }

  &:last-child {
    border: none;
    cursor: default;
  }

`;