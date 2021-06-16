import { useEffect } from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { user1, polls } from './store/reducers/fake-data';
import { Container } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setUser } from './store/action-creators/user.actions';
import { addInitialPoll } from './store/action-creators/questions.actions';
import { routes } from "constants/paths";
import { RouteProps } from "constants/paths";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      dispatch(setUser(user1));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem('polls')) {
      dispatch(addInitialPoll(polls))
    }
  }, [dispatch])

  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            {routes.map((route: RouteProps) => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.component()} />
            ))}
          </Switch>
        </Container>
      </main>
    </Router>
  );
}

export default App;
