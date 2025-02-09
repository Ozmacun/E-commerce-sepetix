import { Routes, Route } from "react-router-dom";

import PageContent from "./layout/PageContent";
console.log("PageContent:", PageContent);

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageContent></PageContent>} />
    </Routes>
  );
}

export default App;
