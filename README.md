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

This repo is configured for Cloudflare Workers through OpenNext.

Deploy with:

```bash
npm run preview
npm run deploy
```

Both commands run the OpenNext build step first through npm lifecycle hooks, so the generated `.open-next/` output is always fresh in the same environment as the preview or deploy.

The Worker name is set to `otic-home` in [`wrangler.jsonc`](/C:/github/Otic/otic/wrangler.jsonc). If your Cloudflare account still has a service binding named `WORKER_SELF_REFERENCE` that points at `otic`, update it to the deployed Worker name or remove it if the binding is not required.

If you need to regenerate Cloudflare env types, run `npm run cf-typegen`.
