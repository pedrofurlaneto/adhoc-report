import { styled } from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 23px;
  
  h3 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
  }

  hr {
    width: 56px;
    border: 1px solid #4f518c;
  }
`;

export interface IBaseTitleProps {
  title: string;
}

export function BaseTitle({ title }: IBaseTitleProps) {
  return (
    <TitleDiv>
      <h3>{title}</h3>
      <hr />
    </TitleDiv>
  );
}
