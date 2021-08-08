import AppRouter from "./components/AppRouter";
import HeaderContainer from "./components/header/HeaderContainer";

import { HashRouter } from 'react-router-dom'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <HashRouter>
        <AppRouter />
      </HashRouter>
      <br />
    </div>
  );
}

export default App;
