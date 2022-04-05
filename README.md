Bug list:
Pagination not working, prev and next buttons not loading next 20 images. It's a state thing, i even added my state value to the useEffect clause and it's still not working. Then my pizza finished cooking so, yeah, extra cheese ;-)

Error trapping not yet implemented, no 404 page, no url checking/encoding, user can totally mess with url on catinfo page and blow it all up

As I add more features I'll track the bugs here too.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

To install after download: 

• Create a .env file in the root, put your cat api key there (looks something like THE_CAT_API_KEY='ed6ff4ff-87f8-452f-9c22-fedf5fc6f088')

• Add 'cdn2.thecatapi.com' to the next.config.js file under Images to allow images to be served from your localhost with CORS issues


