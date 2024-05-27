import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from "../../contexts/DataContext";
import Footer from './Footer';

test('renders Footer component correctly', () => {
    render(
        <DataProvider>
            <Router>
                <Footer />
            </Router>
        </DataProvider>
    );

    const title = screen.getByText(/Amoungui./i, { selector: 'h2' });
    expect(title).toBeInTheDocument();

    const facebookLink = screen.getByLabelText(/Facebook/i);
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink.getAttribute('href')).toBe('https://web.facebook.com/profile.php?id=100081180588993');

    const instagramLink = screen.getByLabelText(/Instagram/i);
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink.getAttribute('href')).toBe('https://www.instagram.com/jazzmastaz/');

    const twitterLink = screen.getByLabelText(/Twitter/i);
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink.getAttribute('href')).toBe('https://x.com/Amoungui');

    const copyRight = screen.getByText(/© Amoungui. All rigths reserved/i);
    expect(copyRight).toBeInTheDocument();
});
