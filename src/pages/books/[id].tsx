import React from 'react';
import type { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import CardsList from '../../components/CardsList/CardsList';
import { Book } from '../../types/types';

interface BookPage {
  book: Book;
  booksByAuthor: Book[];
}

const BookPage: NextPage<BookPage> = ({ book, booksByAuthor }) => {
  if (!book) return <div>Book not found</div>;

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '25px',
      }}
    >
      <Head>
        <title>{book.title}</title>
        <meta name="description" content="A list of books suggested by Hokodo" />
      </Head>

      <main>
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '50px',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              margin: '25px 0',
            }}
          >
            {book.title}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              alt="Picture of the book cover"
              loader={() => book.cover}
              src={book.cover}
              width={640}
              height={480}
              style={{ borderRadius: '25px' }}
            />
          </div>
          <div
            style={{
              marginTop: '25px',
            }}
          >
            <Typography variant="h4" component="h2">
              {book.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              ISBN: {book.isbn}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {book.description}
            </Typography>
          </div>
          <div>
            {book.website && (
              <Link href={book.website} passHref={true}>
                <Button
                  variant="contained"
                  sx={{
                    margin: '25px 5px 0 0',
                  }}
                >
                  MORE INFO
                </Button>
              </Link>
            )}
            <Link href="/" passHref={true}>
              <Button
                variant="outlined"
                sx={{
                  margin: '25px 5px 0 0',
                }}
              >
                BACK TO LIST
              </Button>
            </Link>
          </div>
        </Paper>

        <CardsList books={booksByAuthor} />
      </main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.params?.id;
    const result = await fetch('https://hokodo-frontend-interview.netlify.com/data.json');
    const { books } = await result.json();

    const book: Book = books.find((item: Book) => item.id === id);
    const author = book ? book.author : '';

    const booksByAuthor: Book[] = books.filter(
      (item: Book) => item.author == author && item !== book
    );

    return { props: { book, booksByAuthor } };
  } catch (e) {
    console.log(e);
    return { props: { book: null, booksByAuthor: [] } };
  }
};

export default BookPage;
