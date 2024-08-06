import { styled } from "styled-components";

export const AttributesList = styled.ul`
  list-style: none;

  text-transform: capitalize;

  h4 {
    color: #7a7a7a;
    font-weight: normal;
  }

  li + li {
    margin-top: 3px;
  }
`;