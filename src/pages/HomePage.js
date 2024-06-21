import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import breakfastImg from '../assets/images/breakfast.jpg';
import lunchImg from '../assets/images/lunch.jpg';
import dinnerImg from '../assets/images/dinner.jpg';
import mealPlannerImg from '../assets/images/meal_planner_graphic.png';
import MealPlanCreationTile from '../components/MealPlanCreationTile';

const HomeContainer = styled.div`
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
  min-height: 300px; /* Ustawienie minimalnej wysokości */
`;

const ImageTile = styled(Tile)`
  background-image: url(${mealPlannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = styled(Tile)`
  text-align: center;
`;

const CardTitle = styled.h2`
  color: #4CAF50;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #777;
  margin-bottom: 20px;
`;

const CardLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #45a049;
  }
`;

const ImageCard = styled(Tile)`
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const MealPlanCard = styled(Tile)`
  text-align: left;
  max-height: 400px;
  overflow-y: auto;
`;

const MealPlanCardTitle = styled.h2`
  color: #4CAF50;
  margin-bottom: 10px;
  text-align: center;
`;

const MealPlanDay = styled.div`
  margin-bottom: 10px;
`;

const HomePage = ({ mealPlan }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/recipes?category=${category}`);
  };

  return (
    <HomeContainer>
      {/* First row */}
      <Tile>
        <MealPlanCreationTile />
      </Tile>
      <Tile>
        <MealPlanCard>
          <MealPlanCardTitle>Meal Planner</MealPlanCardTitle>
          {Object.keys(mealPlan).length === 0 ? (
            <p>No meal plan available. Please add meals to your plan.</p>
          ) : (
            Object.keys(mealPlan).map(day => (
              <MealPlanDay key={day}>
                <h3>{day}</h3>
                <p><strong>Breakfast:</strong> {mealPlan[day]?.breakfast || 'Not set'}</p>
                <p><strong>Lunch:</strong> {mealPlan[day]?.lunch || 'Not set'}</p>
                <p><strong>Dinner:</strong> {mealPlan[day]?.dinner || 'Not set'}</p>
              </MealPlanDay>
            ))
          )}
        </MealPlanCard>
      </Tile>
      <ImageTile />

      {/* Second row */}
      <Card>
        <CardTitle>Recipes</CardTitle>
        <CardDescription>Browse and add your favorite recipes.</CardDescription>
        <CardLink to="/recipes">Go to Recipes</CardLink>
      </Card>

      <Card>
        <CardTitle>Meal Plan</CardTitle>
        <CardDescription>Plan your meals for the week.</CardDescription>
        <CardLink to="/meal-plan">Go to Meal Plan</CardLink>
      </Card>

      <Card>
        <CardTitle>Shopping List</CardTitle>
        <CardDescription>Generate your shopping list.</CardDescription>
        <CardLink to="/shopping-list">Go to Shopping List</CardLink>
      </Card>

      {/* Third row */}
      <ImageCard onClick={() => handleCategoryClick('Breakfast')}>
        <CardTitle>Breakfast</CardTitle>
        <Image src={breakfastImg} alt="Breakfast" />
      </ImageCard>

      <ImageCard onClick={() => handleCategoryClick('Lunch')}>
        <CardTitle>Lunch</CardTitle>
        <Image src={lunchImg} alt="Lunch" />
      </ImageCard>

      <ImageCard onClick={() => handleCategoryClick('Dinner')}>
        <CardTitle>Dinner</CardTitle>
        <Image src={dinnerImg} alt="Dinner" />
      </ImageCard>
    </HomeContainer>
  );
};

export default HomePage;
