import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MainContainer />
      </Provider>
    </>
  );
}

export default App;
