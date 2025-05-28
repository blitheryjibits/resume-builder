import "./styles/app.css";
import "./styles/form-styles.css";
import "./styles/project-styles.css";
import MyForm from "./components/form-state-controller";
import MyResume from "./components/resume-components/myResume";
import { useState } from "react";

function App() {
  const [appData, setAppData] = useState({
    contactDetails: {},
    courses: [],
    skills: [],
    experience: [],
    projects: [],
  });

  return (
    <div className="main-container">
      <MyForm setAppData={setAppData} />
      <MyResume appData={appData} />
    </div>
  );
}

export default App;
