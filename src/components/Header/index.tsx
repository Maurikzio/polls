import { FC } from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import CustomLink from '../Link';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'store/action-creators/user.actions';
import * as fakeData from 'store/reducers/fake-data';
import { User } from 'store/action-types/user.types';
import "./styles.css";
import { AppState } from 'store/reducers/rootReducer';
import { routes } from 'constants/paths';

const Header: FC = () => {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const handleOnChangeUser = (usr: User) => {
    dispatch(setUser(usr));
  }

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        className="header__navbar"
      >
        <Container>
          <Navbar.Brand to="/" as={CustomLink}>
            SUPER-POLLS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="polls-navbar" />
          <Navbar.Collapse id="polls-navbar" className="navbar__container">
            {routes.filter(route => !route.hidden)
              .map(({ path, title }) => (
                <Nav className="mr-auto" key={path}>
                  <Nav.Link to={path} as={CustomLink}>{title}</Nav.Link>
                </Nav>
              ))}
            <NavDropdown title="Users" id="basic-nav-dropdown">
              {[fakeData.user1, fakeData.user2].map((usr, idx) => (
                <NavDropdown.Item key={idx} onClick={() => handleOnChangeUser(usr)}>{usr.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Navbar.Text className="user__name">{user.name}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

export default Header;