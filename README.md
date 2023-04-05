This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

first, next and react and react-dom getting.

```
(sudo) yarn add next react react-dom
```

next, run the development server:

```bash
(sudo) yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

For this project, we recommend Netlify as the hosthing environment.

Please refer to it as it is just a theorys.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## eslint

We have strict rules when using eslint.

However, please note that prettier does not work by default under Linux environment.

```
(sudo) yarn add lint
```

```
(sudo) yarn add prettier
```

```
(sudo) yarn add eslint-plugin-prettier
```

and, added rules. 

```.eslintrc.json
{
  "extends": [
    "next/core-web-vitals"
  ],
  "plugins": [
    "prettier"
  ],
  "ignorePatterns": [
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
