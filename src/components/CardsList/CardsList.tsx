import Box from '@mui/material/Box';

import BookCard from '../Card/Card';
import { Book } from '../../types/types';

interface CardsListProps {
  books: Book[];
}

const CardsList: React.FC<CardsListProps> = ({ books }) => {
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

export default CardsList;
