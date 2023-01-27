import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import { renderWithRouter } from './helpers/renderWith';

const setLocalStorage = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

describe('Verifica a Tela de Profile:', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('Testa os elementos da tela.', () => {
    renderWithRouter(<Profile />);

    const userEmail = 'email';
    const userData = 'teste@gmail.com';

    setLocalStorage(userEmail, userData);
    expect(localStorage.getItem(userEmail)).toEqual(JSON.stringify(userData));

    const doneRecipes = screen.getByRole('button', { name: /done recipes/i });
    const favoriteRecipes = screen.getByRole('button', { name: /favorite recipes/i });
    const logout = screen.getByRole('button', { name: /logout/i });

    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  it('Testa o botão Logout.', () => {
    renderWithRouter(<Profile />);

    const userEmail = 'email';
    const userData = 'teste@gmail.com';
    setLocalStorage(userEmail, userData);

    const logout = screen.getByRole('button', { name: /logout/i });
    userEvent.click(logout);
    window.localStorage.clear();

    expect(Object.entries(window.localStorage)).toHaveLength(0);
  });
});
