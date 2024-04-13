import "./App";
import Router from "./Router";
import { GlobalStyle } from './Styles/GlobalStyle';
import KakaoMaps from "./components/Map/KakaoMaps";
const App = () => {

  // 애가찐이야
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isMobile = window.innerWidth <= 480;
  console.log(isMobile);
  return (
    <div id="App">
      <KakaoMaps />
      <GlobalStyle/>
      <Router />
    </div>
  );
};

export default App;
