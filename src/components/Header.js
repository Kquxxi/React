import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #4CAF50;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <NavBar>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/recipes">Recipes</NavLink>
    <NavLink to="/meal-plan">Meal Plan</NavLink>
    <NavLink to="/shopping-list">Shopping List</NavLink>
  </NavBar>
);

export default Header;
