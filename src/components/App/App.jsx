import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx";
import { Container } from '@mui/material';
import GameField from "../views/MainPage/GameField/GameField.jsx";
import { Provider } from 'react-redux';
import store from '../../redux/store'


function App() {

  return (
    <Provider store={store}>
      <Container >
        <Router>
          {/* Здесь должна быть проверка для навбара, если регистрации нет - отображать не нужно */}
          <Navbar />
          <GameField />

          <Switch>

            <Route path="/" exact>
              {/* <Main /> */}
            </Route>

            <Route path="/registration" exact>
              {/* <Registration /> */}
            </Route>

            <Route path="/login" exact>
              {/* <Login /> */}
            </Route>

            {/* <Route path="/profile" exact>
            <Profile />
          </Route> */}

          </Switch>

        </Router>
      </Container >
    </Provider>
  );
}

export default App;
