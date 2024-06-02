import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/mainPage/MainPage";
import RedirectionPage from "./components/Login/redirectionPage";
import { MypageSwipe } from "./components/Mypage/components/MypageSwipe";

interface RouterProps {
  children?: ReactNode;
}

const Router = ({ children }: RouterProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/google/auth" element={<RedirectionPage />} />
        <Route path="/mypage" element={<MypageSwipe />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
