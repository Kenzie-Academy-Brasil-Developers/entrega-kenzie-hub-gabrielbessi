import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RoutesMain />
    </div>
  );
}

export default App;
