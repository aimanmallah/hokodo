import React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar from './Navbar';

describe('NavBar', () => {
  it('renders the Navbar correctly when passed a title and url as props', () => {
    const mockTitle = 'mock title';
    const mockUrl = '/mockUrl';

    render(<NavBar title={mockTitle} url={mockUrl} />);

    expect(screen.getByRole('button')).toHaveTextContent(mockTitle);
  });
});
