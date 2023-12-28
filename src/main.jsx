import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "../src/app/store";
import { PersistGate } from "redux-persist/integration/react";
import { EdgeSnackProvider } from "./components/EdgeSnack/EdgeSnackProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <EdgeSnackProvider>
          <App />
        </EdgeSnackProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);
