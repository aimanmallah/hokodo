import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockBooks } from '../../assets/mockBooks';
import { Book } from '../../types/types';
import CardsList from './CardsList';

describe('CardsList', () => {
  it.each(mockBooks)('renders BookCards for the books its passed as props', (book: Book) => {
    render(<CardsList books={mockBooks} />);

    expect(screen.getByText(book.title)).toBeInTheDocument();
    expect(screen.getByText(book.author)).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(mockBooks.length);
  });
});
