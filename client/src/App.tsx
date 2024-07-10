import { AttributesBox } from "./components/attributes-selection/attributes-box";
import { ConfigureBox } from "./components/configure-selection/configure-box";

function App() {
  return (
    <div style={{background: '#F5F5F5', display: 'flex', justifyContent: 'space-evenly'}}>
        <ConfigureBox />
        <AttributesBox />
        {/* <ReportTable
          content={tableContent.rows}
          headers={tableContent.headers}
        /> */}
    </div>
  );
}

export default App;
