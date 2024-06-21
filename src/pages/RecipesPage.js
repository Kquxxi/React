import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import pancakesImg from '../assets/images/pancakes.jpg';
import saladImg from '../assets/images/salad.jpg';
import spaghettiImg from '../assets/images/spaghetti.jpg';

const defaultRecipes = [
  { id: 1, name: 'Pancakes', category: 'Breakfast', image: pancakesImg, ingredients: ['2 cups flour', '2 eggs', '1 cup milk'] },
  { id: 2, name: 'Salad', category: 'Lunch', image: saladImg, ingredients: ['1 cucumber', '2 tomatoes', '1/2 cup feta cheese'] },
  { id: 3, name: 'Spaghetti', category: 'Dinner', image: spaghettiImg, ingredients: ['200g spaghetti', '100g ground beef', '1 cup tomato sauce'] },
];

const RecipesContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Tile = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  cursor: pointer;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AddRecipeButton = styled(FilterButton)`
  background-color: #2196F3;

  &:hover {
    background-color: #1E88E5;
  }
`;

const RecipesPage = ({ recipes, addRecipe }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFilter = queryParams.get('category');
    if (categoryFilter) {
      filterRecipes(categoryFilter);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [location.search, recipes]);

  const filterRecipes = (category) => {
    if (category === 'All') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(recipe => recipe.category === category));
    }
  };

  return (
    <div>
      <div>
        <FilterButton onClick={() => filterRecipes('All')}>All</FilterButton>
        <FilterButton onClick={() => filterRecipes('Breakfast')}>Breakfast</FilterButton>
        <FilterButton onClick={() => filterRecipes('Lunch')}>Lunch</FilterButton>
        <FilterButton onClick={() => filterRecipes('Dinner')}>Dinner</FilterButton>
        <FilterButton onClick={() => filterRecipes('Detox')}>Detox</FilterButton>
        <FilterButton onClick={() => filterRecipes('Decreasing 750 kcal')}>Decreasing 750 kcal</FilterButton>
        <FilterButton onClick={() => filterRecipes('Decreasing 1000 kcal')}>Decreasing 1000 kcal</FilterButton>
        <FilterButton onClick={() => filterRecipes('Balance 2000 kcal')}>Balance 2000 kcal</FilterButton>
        <FilterButton onClick={() => filterRecipes('Vegan')}>Vegan</FilterButton>
        <FilterButton onClick={() => filterRecipes('Healthy')}>Healthy</FilterButton>
        <FilterButton onClick={() => filterRecipes('Gains')}>Gains</FilterButton>
        <FilterButton onClick={() => filterRecipes('Spicy')}>Spicy</FilterButton>
        <FilterButton onClick={() => filterRecipes('High carb')}>High carb</FilterButton>
        <FilterButton onClick={() => filterRecipes('Seafood')}>Seafood</FilterButton>
        <AddRecipeButton onClick={() => navigate('/add-recipe')}>Add New Recipe</AddRecipeButton>
      </div>
      <RecipesContainer>
        {filteredRecipes.map(recipe => (
          <Tile key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <h2>{recipe.name}</h2>
            <RecipeImage src={recipe.image} alt={recipe.name} />
          </Tile>
        ))}
      </RecipesContainer>
    </div>
  );
};

export default RecipesPage;
