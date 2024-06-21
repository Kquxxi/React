import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const generateShoppingList = (mealPlan) => {
  let ingredients = [];
  Object.values(mealPlan).forEach(day => {
    Object.values(day).forEach(meal => {
      if (meal) {
        ingredients = [...ingredients, ...meal.split(', ')];
      }
    });
  });
  return [...new Set(ingredients)];
};

const ShoppingList = ({ mealPlan }) => {
  const shoppingList = generateShoppingList(mealPlan);

  return (
    <ListContainer>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default ShoppingList;
