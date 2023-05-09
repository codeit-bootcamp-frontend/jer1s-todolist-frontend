import GlobalStyle from "components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
