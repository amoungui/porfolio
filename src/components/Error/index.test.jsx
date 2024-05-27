import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from "../../contexts/DataContext";
import Error from './Error';

test('renders Error component correctly', () => {
    render(
        <DataProvider>
            <Router>
                <Error />
            </Router>
        </DataProvider>

    );

    const errorInfo = screen.getByText(/404/i);
    expect(errorInfo).toBeInTheDocument();

    const errorMsg = screen.getByText(/Oups! La page que vous demandez n'existe pas./i);
    expect(errorMsg).toBeInTheDocument();

    const linkElement = screen.getByText(/Retourner sur la page d’accueil/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
});
