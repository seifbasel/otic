This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project now uses a local system font stack so builds do not depend on external font downloads.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare

This repo is configured as a static Cloudflare Assets site.

Build the export, then deploy the `out/` directory:

```bash
npm run build
npm run deploy
```

For local preview, run:

```bash
npm run preview
```

The static Cloudflare config lives in [`wrangler.jsonc`](/C:/github/Otic/otic/wrangler.jsonc) and serves files from `./out` with trailing-slash HTML handling.
