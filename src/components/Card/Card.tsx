import React from 'react';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Book } from '../types/types';

const BookCard: React.FC<Book> = ({ id, title, author, cover }) => {
  return (
    <Link href={`/books/${id}`}>
      <Card data-testid="card" sx={{ width: 350, marginTop: '25px' }}>
        <CardActionArea>
          <CardMedia component="img" height="175" image={cover} alt="book cover" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default BookCard;
