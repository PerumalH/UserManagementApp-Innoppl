import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./router/Approuter";
import "./styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
