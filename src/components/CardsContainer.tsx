import Box from '@mui/material/Box';

import BookCard from '../components/Card';
import { Book } from '../types/types';

interface CardsContainerProps {
  books: Book[];
}

const CardsContainer: React.FC<CardsContainerProps> = ({ books }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {books.map(({ id, title, cover, author }: Book) => (
        <BookCard key={id} title={title} cover={cover} author={author} id={id} />
      ))}
    </Box>
  );
};

export default CardsContainer;
