import { useRouter } from 'next/router';
import { Book } from '../types/types';

export const useBookData = (books: Book[]) => {
  const { id } = useRouter().query;
  const book = books.find((item: Book) => item.id === id);
  const author = book ? book.author : '';

  const booksByAuthor = books.filter((item: Book) => item.author == author && item !== book);
  return { book, booksByAuthor };
};
