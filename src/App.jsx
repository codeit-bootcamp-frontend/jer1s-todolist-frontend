import GlobalStyle from "components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CookiesProvider } from "react-cookie";
import AccountLayout from "components/AccountLayout";
import HomePage from "pages/HomePage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <CookiesProvider>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/" element={<AccountLayout />}>
              <Route path="signin" element={<SigninPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </CookiesProvider>
  );
}

export default App;
