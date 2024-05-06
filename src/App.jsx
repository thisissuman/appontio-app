
import HeaderMenu from "./components/HeaderMenu";
import MainContainer from "./components/MainContainer";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderMenu />
        <MainContainer />
      </Provider>
    </>
  );
}

export default App;
