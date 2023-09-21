import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonSectors from "./personsectors/personsectors";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <PersonSectors />
    </>
  );
}

export default App;
