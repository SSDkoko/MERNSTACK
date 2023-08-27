import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pokémon list', () => {
  render(<App />);
  
  // Assuming you are rendering Pokémon names
  const pokemonNameElement = screen.getByText(/pikachu/i);
  expect(pokemonNameElement).toBeInTheDocument();
});

