import { BrowserRouter as Router } from "react-router-dom";
import RouterList from "./Components/RouterList";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <SideMenu />
        <main className="content">
          <RouterList />
        </main>
      </Router>
    </div>
  );
}

export default App;
