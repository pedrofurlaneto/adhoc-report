import { styled } from "styled-components";

export const AttributeContainer = styled.div`
  width: 90%;
  height: min-content;
  min-height: auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.35em;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ababab;
  }
`;
