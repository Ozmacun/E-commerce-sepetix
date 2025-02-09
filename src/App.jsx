import { Routes, Route } from "react-router-dom";

import PageContent from "./layout/PageContent";


function App() {
  return (
    <Routes>
      <Route path="/" element={<PageContent/>} />
    </Routes>
  );
}

export default App;
