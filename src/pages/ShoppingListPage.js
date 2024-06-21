import React from 'react';
import styled from 'styled-components';

const ShoppingListContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ShoppingListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  vertical-align: top;
`;

const RecipeNameTd = styled(Td)`
  font-weight: bold;
`;

const ShoppingListPage = ({ shoppingList }) => {
  // Grupowanie składników według przepisów
  const groupedItems = shoppingList.reduce((groups, item) => {
    if (!groups[item.recipe]) {
      groups[item.recipe] = [];
    }
    groups[item.recipe].push(item.ingredient);
    return groups;
  }, {});

  return (
    <ShoppingListContainer>
      <h1>Shopping List</h1>
      <ShoppingListTable>
        <thead>
          <tr>
            <Th>Recipe</Th>
            <Th>Ingredients</Th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedItems).map((recipe, index) => (
            <tr key={index}>
              <RecipeNameTd>{recipe}</RecipeNameTd>
              <Td>
                {groupedItems[recipe].map((ingredient, idx) => (
                  <div key={idx}>{ingredient}</div>
                ))}
              </Td>
            </tr>
          ))}
        </tbody>
      </ShoppingListTable>
    </ShoppingListContainer>
  );
};

export default ShoppingListPage;
