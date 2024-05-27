import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from "../../contexts/DataContext";
import Home from './Home';

describe('Home component', () => {
  test('renders home section', async () => {
    await render(<DataProvider><Router><Home /></Router></DataProvider>);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });

  test('renders about section', () => {
    render(<Router><Home /></Router>);
    const aboutElement = screen.getByTestId('about');
    expect(aboutElement).toBeInTheDocument();
  });

  test('renders skills section', () => {
    render(<Router><Home /></Router>);
    const skillsElement = screen.getByTestId('skills');
    expect(skillsElement).toBeInTheDocument();
  });

  test('renders work section', () => {
    render(<Router><Home /></Router>);
    const workElement = screen.getByTestId('work');
    expect(workElement).toBeInTheDocument();
  });

  test('renders contact section', () => {
    render(<Router><Home /></Router>);
    const contactElement = screen.getByTestId('contact');
    expect(contactElement).toBeInTheDocument();
  });
});