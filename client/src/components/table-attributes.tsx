import { styled } from "styled-components";
import { TableList } from "./table-list";
import { ColumnList } from "./column-list";
import { BaseTitle } from "./base-title";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export function TableAttributes() {
  return (
    <div>
      <BaseTitle title="Table Data Attributes" />
      <Container>
        <TableList />
        <ColumnList />
      </Container>
    </div>
  );
}
