import { styled } from "styled-components";

export const AttributesBox = styled.section`
  height: 96%;
  max-height: auto;
  overflow-y: auto;
  padding-right: 2%;

  text-transform: capitalize;

  h4 {
    color: #7A7A7A;
    font-weight: normal;
  }

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
