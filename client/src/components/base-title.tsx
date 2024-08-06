import { ReactNode } from "react";
import { styled } from "styled-components";

type TitleAlign = "center" | "left";

interface TitleDivProps {
  children: ReactNode;
  align: TitleAlign;
}

const TitleDiv = styled.div<TitleDivProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align === 'left' ? 'flex-start' : 'center'};
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
  align?: TitleAlign;
  children: ReactNode;
}

export function BaseTitle({ children, align = 'left' }: IBaseTitleProps) {
  return (
    <TitleDiv align={align}>
      <h3>{children}</h3>
      <hr />
    </TitleDiv>
  );
}
