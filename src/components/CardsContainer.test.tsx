import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockBooks } from '../assets/mockBooks';
import { Book } from '../types/types';
import CardsContainer from './CardsContainer';

describe('CardsContainer', () => {
  it.each(mockBooks)('renders BookCards for the books its passed as props', (book: Book) => {
    render(<CardsContainer books={mockBooks} />);

    expect(screen.getByText(book.title)).toBeInTheDocument();
    expect(screen.getByText(book.author)).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(mockBooks.length);
  });
});
