import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, ingredients: ingredients.split(',') });
    setName('');
    setIngredients('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name</label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Ingredients (comma separated)</label>
        <Input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </div>
      <Button type="submit">Add Recipe</Button>
    </FormContainer>
  );
};

export default RecipeForm;
