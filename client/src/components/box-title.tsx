import { styled } from "styled-components";

const BoxTitleDiv = styled.div`
  hr {
    width: 50px;
    height: 2px;
    border: none;
    background-color: #4f518c;
  }

  h3 {
    font-weight: 500;
    margin: 0;
  }
`;

export interface IBoxTitleProps {
  title: string;
}

export function BoxTitle({ title }: IBoxTitleProps) {
  return (
    <BoxTitleDiv>
      <h3>{title}</h3>
      <hr />
    </BoxTitleDiv>
  );
}
