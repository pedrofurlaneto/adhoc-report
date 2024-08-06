import { IconButton } from "@mui/material";
import { BaseTitle } from "./base-title";
import { useReportMetadata } from "../hooks/use-report-metadata";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";
import { AttributeContainer } from "./attribute-container";
import { OperationSelection } from "./operation-selection";
import { ColumnSelection } from "./column-selection";
import { InputValue } from "./input-value";
import { useDataBaseMetadata } from "../hooks/use-database-metadata";
import DeleteIcon from "@mui/icons-material/Delete";

const FilterList = styled.ul`
  list-style: none;

  li + li {
    margin-top: 40px;
  }
`;

const Container = styled(AttributeContainer)`
  width: 100%;
`

const FilterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const FormGroup = styled.div`
  width: 50%;
`;

export function FilterAttributes() {
  const { setFilters, filters } = useReportMetadata();
  const { columns } = useDataBaseMetadata();

  const handleAddOnClick = () =>
    setFilters((filters) => {
      return [
        ...filters,
        {
          id: Date.now().toString(),
          column: null,
          operation: 0,
          value: null,
        },
      ];
    });

  const handleDeleteOnClick = (id: string) =>
    setFilters((oldFilterValues) =>
      oldFilterValues.filter((filter) => filter.id !== id)
    );

  return (
    <div>
      <BaseTitle>Filter Attributes</BaseTitle>
      <IconButton onClick={() => handleAddOnClick()} aria-label="add">
        <AddCircleIcon htmlColor="#4f518c" />
      </IconButton>

      <Container>
        <FilterList>
          {filters.map((filter) => (
            <FilterItem key={filter.id}>
              <FormGroup>
                <OperationSelection id={filter.id} />
                <ColumnSelection id={filter.id} columns={columns} />
                <InputValue id={filter.id} />
              </FormGroup>
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteOnClick(filter.id)}
              >
                <DeleteIcon htmlColor="tomato" />
              </IconButton>
            </FilterItem>
          ))}
        </FilterList>
      </Container>
    </div>
  );
}
