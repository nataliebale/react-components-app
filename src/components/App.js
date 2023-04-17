import { useState } from "react";
import Header from "./Header";
import Speakers from "./Speakers";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={
      theme === "light" ? "container-fluid light" : "container-fluid dark"
    }>
      <Header theme={theme}></Header>
      <Speakers
        theme={theme}
        setTheme={setTheme}
      ></Speakers>
    </div>
  );
}

export default App;
