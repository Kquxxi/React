import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AddRecipePage from './pages/AddRecipePage';
import MealPlanPage from './pages/MealPlanPage';
import ShoppingListPage from './pages/ShoppingListPage';
import styled from 'styled-components';

import pancakesImg from './assets/images/pancakes.jpg';
import saladImg from './assets/images/salad.jpg';
import spaghettiImg from './assets/images/spaghetti.jpg';

const AppContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const defaultRecipes = [
  {
    id: 1,
    name: 'Pancakes',
    category: 'Breakfast',
    image: pancakesImg,
    ingredients: ['Flour', 'Baking powder', 'Sugar', 'Salt', 'Milk', 'Butter', 'Egg'],
    instructions: `How to Make Pancakes From Scratch\n
    It's not hard to make homemade pancakes — you just need a good recipe. That's where we come in! You'll find the step-by-step recipe below, but here's a brief overview of what you can expect:\n
    1. Sift the dry ingredients together.\n
    2. Make a well, then add the wet ingredients. Stir to combine.\n
    3. Scoop the batter onto a hot griddle or pan.\n
    4. Cook for two to three minutes, then flip.\n
    5. Continue cooking until brown on both sides.\n
    When to Flip Pancakes\n
    Your pancake will tell you when it's ready to flip. Wait until bubbles start to form on the top and the edges look dry and set. This will usually take about two to three minutes on each side.\n
    How to Reheat Pancakes\n
    Store leftover pancakes in an airtight container in the fridge for about a week. Refrain from adding toppings (such as syrup) until right before you serve them so the pancakes don't get soggy.\n
    Can You Save Pancake Batter?\n
    Don't let leftover pancake batter go to waste! Store the batter in an airtight container in the fridge for up to two days. If you plan to keep it longer than that, it's best to freeze the batter.\n
    Can You Freeze Pancakes?\n
    Yes, you can freeze pancakes and pancake batter.\n
    · To freeze cooked pancakes: Allow the pancakes to cool completely, then arrange them in a single layer on a baking sheet (make sure the edges aren't touching). Flash freeze for a few hours or up to overnight. Reheat in an oven set to 350 degrees F until warmed through.\n
    · To freeze pancake batter: Ladle the pancake batter in serving size portions into freezer bags, then wrap the bags in foil. Freeze flat for up to one month. Thaw in the refrigerator overnight.`
  },
  {
    id: 2,
    name: 'Salad',
    category: 'Lunch',
    image: saladImg,
    ingredients: ['1 garlic clove, smashed', 'Kosher salt', '2 tablespoons mayonnaise', '2 tablespoons red wine vinegar', '1/2 teaspoon dried oregano', '1/4 cup plus 2 tablespoons extra-virgin olive oil', 'Freshly ground black pepper', '1 large romaine heart, chopped', '1 small head of radicchio, halved, cored and coarsely chopped', '1/4 head of iceberg lettuce, coarsely chopped', '1 tender celery rib, thinly sliced', '1/2 small red onion, thinly sliced', '1/2 cup cherry tomatoes', '1/4 cup pitted green olives, preferably Sicilian', '8 peperoncini', '2 ounces Parmigiano-Reggiano cheese, shaved (1 cup)'],
    instructions: `1. Gather the ingredients.\n
                   2. In a large bowl, mash the garlic to a paste with a generous pinch of salt.\n
                   3. Whisk in the mayonnaise, vinegar, and oregano, then whisk in the olive oil. Season with pepper.\n
                   4. Add all of the remaining ingredients and toss well. Serve right away.`
  },
  {
    id: 3,
    name: 'Spaghetti',
    category: 'Dinner',
    image: spaghettiImg,
    ingredients: ['1 pound ground beef', '1 medium onion, chopped', '4 cloves garlic, minced', '1 small green bell pepper, diced', '1 (28 ounce) can diced tomatoes', '1 (16 ounce) can tomato sauce', '1 (6 ounce) can tomato paste', '2 teaspoons dried oregano', '2 teaspoons dried basil', '1 teaspoon salt', '½ teaspoon ground black pepper'],
    instructions: `1. Cook ground beef in a saucepan over medium-high heat with garlic, onion, and green pepper. Stir until the meat is brown and crumbly. The vegetables should be tender.\n
                   2. Stir diced tomatoes, tomato sauce, and tomato paste into the beef mixture. Add oregano, basil, salt, and pepper. Simmer until thick and aromatic, then serve over cooked spaghetti noodles.\n
                   3. If your spaghetti sauce didn't turn out exactly how you wanted it to, don't worry! There's probably an easy fix.\n
                   4. This recipe should result in a perfectly thick spaghetti sauce. But things happen! If you somehow end up with a runny consistency, there are a few ways to thicken it. You could simmer the sauce for a few more minutes — this will reduce some of the liquid and leave you with a thicker sauce.\n
                   For a quicker fix, make a slurry with one part water and one part cornstarch. Stir the slurry slowly into the sauce until you've reached the desired thickness.\n
                   5. This top-rated recipe calls for garlic, oregano, basil, salt, and pepper. However, you can certainly adjust, eliminate, or add seasonings to suit your taste. To make this spaghetti sauce your own, you could add parsley or spice things up with crushed red pepper. Just remember to taste the sauce every time you add an ingredient so you don't accidentally add too much or too little.\n
                   6. We love the texture and flavor of this spaghetti sauce when it simmers for about an hour. If you'd like your sauce a little thinner, reduce the time a bit. Meanwhile, if you like it a little thicker, let it simmer for a bit longer.`
  },
];

const App = () => {
  const [recipes, setRecipes] = useState(defaultRecipes);
  const [mealPlan, setMealPlan] = useState({});
  const [shoppingList, setShoppingList] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const addToShoppingList = (recipe) => {
    const newItems = recipe.ingredients.map(ingredient => ({
      recipe: recipe.name,
      ingredient
    }));
    setShoppingList(prevList => [...prevList, ...newItems]);
  };

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage mealPlan={mealPlan} />} />
        <Route path="/recipes" element={<RecipesPage recipes={recipes} addRecipe={addRecipe} />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage recipes={recipes} addToShoppingList={addToShoppingList} />} />
        <Route path="/add-recipe" element={<AddRecipePage addRecipe={addRecipe} />} />
        <Route path="/meal-plan" element={<MealPlanPage mealPlan={mealPlan} setMealPlan={setMealPlan} />} />
        <Route path="/shopping-list" element={<ShoppingListPage shoppingList={shoppingList} />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
