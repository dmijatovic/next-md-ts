# Next Masterial Design (raw) and typescript demo

This project is test of typescript and material design (plain javascript implementation)

## Installation

```bash
# scaffold nextjs app
npx create-next-app
# install typescript basics
npm i -D typescript @types/react @types/node
# look for types on github definetly typed
```

After installing typescript rename indexjs to tsx file and run nextjs. NextJS will then create default tsconfig.json file and next-env.d.ts file. When using css modules or scss you need to add typing into next-env.d.ts with basic declaration (see next-env.d.ts)

## Typescript specifics

- When using typescript the page components should use NextPage type.
- However, the children components should better use React.FC component type.
- When defining FC you can directly create interface using {} like this and in the () specify default value

```javascript
const PageTitle:React.FC<{title:string}>=({title="Default title"})=>{
  return (
    <h2>{title}</h2>
  )
}
```

- for children use ReactNode generic type like this

```javascript
export interface iPageLayout {
  header?: iHeaderData,
  footer?: iFooterData,
  children?: React.ReactNode
}
```

## Next specifics

- getInitalProps can be only called from top of the page, not from children components.

## Default readme nextjs

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
