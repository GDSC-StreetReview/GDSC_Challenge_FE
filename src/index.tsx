import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const clientId = process.env.REACT_APP_GOOGLE_ID_KEY;
root.render(
  <GoogleOAuthProvider
    clientId={clientId!}
    onScriptLoadError={() => console.log("fail")}
    onScriptLoadSuccess={() => console.log("success")}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
serviceWorkerRegistration.register();
