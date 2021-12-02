import "./App.css";
import { Grid } from "mauerwerk";
import Info from "./data";
import Cell from "./components/Cell/Cell";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    data: Info,
    columns: 3,
    margin: 30,
    filter: "",
    height: Info.height,
  });
  const search = e => {
    setState({ filter: e.target.value, margin: 30 });
  };
  let data = [];
  if (!state.data) {
    data = Info.filter(d => d.name.toLowerCase().indexOf(state.filter) !== -1);
  } else {
    data = state.data.filter(
      d => d.name.toLowerCase().indexOf(state.filter) !== -1
    );
  }

  return (
    <div className="main">
      <Header {...state} search={search} />
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={state.columns}
        // Optional: space between elements
        margin={state.margin}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={0}
      >
        {(data, maximized, toggle) => (
          <Cell {...data} maximized={maximized} toggle={toggle} />
        )}
      </Grid>
    </div>
  );
}

export default App;
