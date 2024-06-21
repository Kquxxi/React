import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TileContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #4CAF50;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #777;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const TagButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #45a049;
  }
`;

const MealPlanCreationTile = () => {
  const navigate = useNavigate();

  const handleButtonClick = (category) => {
    navigate(`/add-recipe?category=${category}`);
  };

  return (
    <TileContainer>
      <Title>Create a weekly meal plan</Title>
      <Description>Select a category to start creating a recipe with the selected category.</Description>
      <ButtonContainer>
        <TagButton onClick={() => handleButtonClick('Breakfast')}>Breakfast</TagButton>
        <TagButton onClick={() => handleButtonClick('Lunch')}>Lunch</TagButton>
        <TagButton onClick={() => handleButtonClick('Dinner')}>Dinner</TagButton>
        <TagButton onClick={() => handleButtonClick('Detox')}>Detox</TagButton>
        <TagButton onClick={() => handleButtonClick('Decreasing 750 kcal')}>Decreasing 750 kcal</TagButton>
        <TagButton onClick={() => handleButtonClick('Decreasing 1000 kcal')}>Decreasing 1000 kcal</TagButton>
        <TagButton onClick={() => handleButtonClick('Balance 2000 kcal')}>Balance 2000 kcal</TagButton>
        <TagButton onClick={() => handleButtonClick('Vegan')}>Vegan</TagButton>
        <TagButton onClick={() => handleButtonClick('Healthy')}>Healthy</TagButton>
        <TagButton onClick={() => handleButtonClick('Gains')}>Gains</TagButton>
        <TagButton onClick={() => handleButtonClick('Spicy')}>Spicy</TagButton>
        <TagButton onClick={() => handleButtonClick('High carb')}>High carb</TagButton>
        <TagButton onClick={() => handleButtonClick('Seafood')}>Seafood</TagButton>
      </ButtonContainer>
    </TileContainer>
  );
};

export default MealPlanCreationTile;
