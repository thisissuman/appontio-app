import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import store from "./lib/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Header />
          <MainContainer />
        </div>
      </Provider>
    </>
  );
}

export default App;
