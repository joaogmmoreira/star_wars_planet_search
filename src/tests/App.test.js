import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars/i);
  expect(linkElement).toBeInTheDocument();
  const inputName = screen.getByTestId('name-filter');
  expect(inputName).toBeInTheDocument();
  const inputColumn = screen.getByTestId('column-filter');
  expect(inputColumn).toBeInTheDocument();
  const inputComparison = screen.getByTestId('comparison-filter');
  expect(inputComparison).toBeInTheDocument();
  const inputValue = screen.getByTestId('value-filter');
  expect(inputValue).toBeInTheDocument();
  const table = screen.getByTestId('table');
  expect(table).toBeInTheDocument();
  expect(inputColumn.value).toBe('population');
  userEvent.type(inputName, 'tatoo');
  const buttonFilter = screen.getByTestId('button-filter');
  userEvent.selectOptions(inputColumn, 'diameter');
  userEvent.selectOptions(inputComparison, 'igual a');
  userEvent.type(inputValue, '10465');
  userEvent.click(buttonFilter);

});
