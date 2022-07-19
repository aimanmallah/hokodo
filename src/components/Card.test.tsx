import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import { Book } from '../types/types';

describe('Card', () => {
  it('renders the Card component correctly when passed a book as props', () => {
    const mockBook: Book = {
      id: '872179f2-4de2-4cde-a259-ee470d83d515',
      cover: 'https://picsum.photos/id/1001/640/480',
      isbn: '9781593275846',
      title: 'Eloquent JavaScript, Second Edition',
      subtitle: 'A Modern Introduction to Programming',
      author: 'Mrs. John Doe',
      published: '2014-12-14T00:00:00.000Z',
      publisher: 'No Starch Press',
      pages: 472,
      description:
        'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: 'http://eloquentjavascript.net/',
    };

    render(<Card {...mockBook} />);

    expect(screen.getByText(mockBook.title)).toBeInTheDocument();
    expect(screen.getByText(mockBook.author)).toBeInTheDocument();
    expect(screen.getByAltText('book cover')).toHaveAttribute('src', mockBook.cover);
  });
});
