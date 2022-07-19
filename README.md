## Hokodo Books

<img width="1791" alt="image" src="https://user-images.githubusercontent.com/47919053/179643291-ebd5715a-4c00-463e-a918-4dc9cb10c318.png">

This is an app built with Next.js, React, React Testing Library and Material UI. The purpose of the app is to fetch data from Fetch data from https://hokodo-frontend-interview.netlify.com/data.json and display the list of books on a page, each book item showing:
- Book title
- Author name
- Cover image (thumbnail size)
- 'More information' link

Moreover, clicking on the 'More information' link should open another page showing:
- Book title
- Author name
- ISBN
- Cover image (full size)
- A list of book titles by the same Author (with links)
- 'Back to list' link



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Running the App

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Constraints

I spent about 6 hours working on the app. If I had more time, I would write more unit tests especially for the pages and custom hooks. 
Moreover, this is my first time using Next.js in over a year and a half so it took some time getting used to it again.
