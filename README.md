## Getting Started

First, run the development server:

```bash
# npm/bun/pnpm/yarn according to you
npm install
# then
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prerequisites

# create a .env file in the root directory and add the following variables:

```bash
 .env
```

and add the following variables:

```
# Auth-Service (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database-Service (NeonDB)
DATABASE_URL=

# Inngest
INNGEST_DEV=1

# Sandbox (e2b)
E2B_API_KEY=

# AI
GEMINI_API_KEY=
```

If you don't have the keys, you can create a free account on [Clerk](https://clerk.com/), [NeonDB](https://neon.tech/), [Inngest](https://inngest.com/), [E2B](https://e2b.dev/) and [Gemini](https://developers.google.com/gemini) to get the keys.

You can also add your own keys according to your needs. If you don't want to use any of the services, you can remove the corresponding code from the project.
