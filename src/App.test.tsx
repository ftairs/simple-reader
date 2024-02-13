import React from 'react';
import {render, screen,} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('Basic Navigation Exists', () => {
    render(<App/>);
    expect(screen.getByText(/Basic Navigation/i)).toBeInTheDocument();
});
