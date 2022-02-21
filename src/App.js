import Header from "./components/Header/Header";
import Form from "./components/Flat/NuevoFlat";
import Flats from "./components/Flats/Flats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="">
      <Router>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/flats" element={<Flats />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
