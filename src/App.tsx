import axios, { HeadersDefaults } from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import RouterList from "./Components/RouterList";
import SideMenu from "./Components/SideMenu";
import { API_TOKEN } from "./Constants";

function App() {
  console.log("ENV: ", process.env.REACT_APP_ENV);
  console.log("API URL: ", process.env.REACT_APP_API_URL);
  console.log(API_TOKEN);

  // Добавление токена авторизации в дефолтные заголовки для всех запросов
  interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
  }

  axios.defaults.headers = {
    Authorization: API_TOKEN,
  } as CommonHeaderProperties;

  return (
    <div className="wrapper">
      <Router>
        <div className="wrapper__content">
          <SideMenu />
          <main className="content">
            <RouterList />
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
