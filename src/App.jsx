import GlobalStyle from "components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "components/DefaultLayout";
import AccountLayout from "components/AccountLayout";
import HomePage from "pages/HomePage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<AccountLayout />}>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
