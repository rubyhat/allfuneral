import React from "react";
import { Button } from "./Components/Helpers/Components";

function App() {
  return (
    <div className="App">
      <Button text="Add button" variant="primary" icon="add" />
      <Button text="Delete" variant="danger" icon="delete" />
    </div>
  );
}

export default App;
