import { BrowserRouter as Router } from "react-router-dom";
import RouterList from "./Components/RouterList";
import SideMenu from "./Components/SideMenu";

function App() {
  console.log("ENV: ", process.env.REACT_APP_ENV);
  console.log("API URL: ", process.env.REACT_APP_API_URL);
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
