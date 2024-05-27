import { render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from "../../contexts/DataContext";
import Header from './Header';

test('renders Header component correctly', () => {
    render(
        <DataProvider>
            <Router>
                <Header />
            </Router>
        </DataProvider>
    );

    const title = screen.getByText(/Amoungui./i);
    expect(title).toBeInTheDocument();

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();

    const skillsLink = screen.getByText(/Skills/i);
    expect(skillsLink).toBeInTheDocument();

    const workLink = screen.getByText(/Work/i);
    expect(workLink).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
});

