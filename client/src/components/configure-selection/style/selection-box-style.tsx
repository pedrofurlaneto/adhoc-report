import { styled } from "styled-components";

export const ConfigurationSelection = styled.div`
  width: 47%;
  height: 18vh;
  margin: 1.5% 1%;
  border: 1px solid #ddd;
  border-radius: 30px;

  font-size: 1.25em;

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

  &.svg {
    font-size: 2em;
  }
`;