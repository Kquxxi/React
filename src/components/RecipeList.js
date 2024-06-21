import React from 'react';
import styled from 'styled-components';

const RecipeListContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const RecipeList = ({ recipes }) => (
  <RecipeListContainer>
    <h2>Recipe List</h2>
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  </RecipeListContainer>
);

export default RecipeList;
