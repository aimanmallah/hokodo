import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Book } from '../types/types';
import CardsContainer from '../components/CardsContainer';

interface HomeProps {
  books: Book[];
}

const Home: NextPage<HomeProps> = ({ books }) => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Hokodo Books</title>
        <meta name="description" content="A list of books suggested by Hokodo" />
      </Head>

      <main>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            marginTop: '25px',
          }}
        >
          Hokodo Books
        </Typography>{' '}
        {books && <CardsContainer books={books} />}
      </main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await fetch('https://hokodo-frontend-interview.netlify.com/data.json');
    const data = await result.json();
    return { props: { books: data.books } };
  } catch (e) {
    console.log(e);
    return { props: { books: [] } };
  }
};

export default Home;
