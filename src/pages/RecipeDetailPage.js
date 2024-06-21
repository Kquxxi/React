import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const RecipeDetailContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const RecipeImage = styled.img`
  width: 50%; /* Ustawienia rozmiaru obrazka */
  height: auto;
  max-width: 600px; /* Maksymalna szerokość obrazka */
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const IngredientsList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  display: inline-block; /* Aby lista była wyśrodkowana */
`;

const IngredientItem = styled.li`
  margin: 5px 0;
`;

const Instructions = styled.div`
  margin-top: 20px;
  text-align: left;
  display: inline-block; /* Aby tekst był wyśrodkowany */
  max-width: 600px; /* Ustawienie maksymalnej szerokości dla lepszego wyglądu */
  font-size: 18px; /* Większy rozmiar czcionki */
  line-height: 1.6; /* Lepsza czytelność */
`;

const InstructionStep = styled.p`
  margin: 10px 0;
  text-align: justify; /* Aby tekst był wyrównany do lewej i prawej */
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const AddToShoppingListButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const RecipeDetailPage = ({ recipes, addToShoppingList }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const handleAddToShoppingList = () => {
    addToShoppingList(recipe);
  };

  return (
    <RecipeDetailContainer>
      <h1>{recipe.name}</h1>
      <RecipeImage src={recipe.image} alt={recipe.name} />
      <h2>Ingredients</h2>
      <IngredientsList>
        {recipe.ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>{ingredient}</IngredientItem>
        ))}
      </IngredientsList>
      <h2>Instructions</h2>
      <Instructions>
        {recipe.instructions.split('\n').map((step, index) => (
          <InstructionStep key={index}>{step}</InstructionStep>
        ))}
      </Instructions>
      <ButtonContainer>
        <AddToShoppingListButton onClick={handleAddToShoppingList}>
          Add to Shopping List
        </AddToShoppingListButton>
      </ButtonContainer>
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
