import { styled } from "styled-components";
import { Section } from "../style/section";
import Radio from "@mui/material/Radio";

const AttributeSelection = styled.div`
  margin-bottom: 0.5%;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
`;

const TablesSelection = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

const ColumnsSelection = styled.section`
  width: 45%;
  max-height: 30vh;
  overflow-y: auto;
  padding-right: 2%;

  &::-webkit-scrollbar {
    width: .35em;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #D9D9D9;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ABABAB;
  }
`;

export function AttributesBox() {
  return (
    <Section style={{ width: "65%" }}>
      <h3>Data Tables Attributes</h3>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TablesSelection>
          <h4>Tables</h4>

          <AttributeSelection id="table1">
            <Radio name="table1" id="table1" />
            <span>Table 1</span>
          </AttributeSelection>

          <AttributeSelection id="table2">
            <Radio name="table2" id="table2" />
            <span>Table 2</span>
          </AttributeSelection>

          <AttributeSelection id="table3">
            <Radio name="table3" id="table3" />
            <span>Table 3</span>
          </AttributeSelection>

          <AttributeSelection id="table4">
            <Radio name="table4" id="table4" />
            <span>Table 4</span>
          </AttributeSelection>
        </TablesSelection>

        <ColumnsSelection>
          <h4>Table 1</h4>

          <AttributeSelection id="column1">
            <Radio name="column1" id="column1" />
            <span>Column 1</span>
          </AttributeSelection>

          <AttributeSelection id="column2">
            <Radio name="column2" id="column2" />
            <span>Column 2</span>
          </AttributeSelection>

          <AttributeSelection id="column3">
            <Radio name="column3" id="column3" />
            <span>Column 3</span>
          </AttributeSelection>

          <AttributeSelection id="column4">
            <Radio name="column4" id="column4" />
            <span>Column 4</span>
          </AttributeSelection>

          <h4>Table 2</h4>

          <AttributeSelection id="column1">
            <Radio name="column1" id="column1" />
            <span>Column 1</span>
          </AttributeSelection>

          <AttributeSelection id="column2">
            <Radio name="column2" id="column2" />
            <span>Column 2</span>
          </AttributeSelection>

          <AttributeSelection id="column3">
            <Radio name="column3" id="column3" />
            <span>Column 3</span>
          </AttributeSelection>

          <AttributeSelection id="column4">
            <Radio name="column4" id="column4" />
            <span>Column 4</span>
          </AttributeSelection>
        </ColumnsSelection>
      </div>
    </Section>
  );
}
