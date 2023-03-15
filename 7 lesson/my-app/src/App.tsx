import "./styles.css";
import { RouterProvider, Link } from "react-router-dom";
import Help from './components/Help/Help';
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
