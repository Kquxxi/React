import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MealPlanTable = ({ mealPlan, setMealPlan }) => {
  const handleChange = (day, mealType, value) => {
    setMealPlan({
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [mealType]: value
      }
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>Day</Th>
          <Th>Breakfast</Th>
          <Th>Lunch</Th>
          <Th>Dinner</Th>
        </tr>
      </thead>
      <tbody>
        {daysOfWeek.map(day => (
          <tr key={day}>
            <Td>{day}</Td>
            <Td><Input type="text" value={mealPlan[day]?.breakfast || ''} onChange={(e) => handleChange(day, 'breakfast', e.target.value)} /></Td>
            <Td><Input type="text" value={mealPlan[day]?.lunch || ''} onChange={(e) => handleChange(day, 'lunch', e.target.value)} /></Td>
            <Td><Input type="text" value={mealPlan[day]?.dinner || ''} onChange={(e) => handleChange(day, 'dinner', e.target.value)} /></Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MealPlanTable;
