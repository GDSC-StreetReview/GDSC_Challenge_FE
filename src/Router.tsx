import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import RedirectionPage from "./components/Login/redirectionPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/google/auth" element={<RedirectionPage />} />

        <Route path="/mypage" element={<MainPage />}>
        <Route path="review" element={<MainPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
