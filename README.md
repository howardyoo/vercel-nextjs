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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Instrumenting Next.js with OpenTelemetry
Please refer to (https://docs.honeycomb.io/get-started/start-building/application/web/)[Honeycomb documentation for Frontend Observability] for more information on how to instrument a Next.js applicaiton with HFO (Honeycomb Frontend Observability).
As for the steps to instrument Node.js with OpenTelemetry, please refer to (https://docs.honeycomb.io/send-data/javascript-nodejs/opentelemetry-sdk/)[Honeycomb documentation for Node.js].

- install dependencies: `npm install @honeycombio/opentelemetry-web @opentelemetry/auto-instrumentations-web`
- update package.json: `"@honeycombio/opentelemetry-web": "^0.13.0", "@opentelemetry/auto-instrumentations-web": "^0.45.1"`
- add `components/observability.tsx` to your project
- add `import Observability from './components/observability';` to your `app/layout.tsx` file
- add `<Observability />` to your `app/layout.tsx` file
- add `apiKey` and `serviceName` to the `Observability` component
- add `"@opentelemetry/auto-instrumentations-node": "^0.56.1"` to the `package.json` file
- run `npm install`
- add `"@opentelemetry/instrumentation-http": "^0.45.1"` to the `package.json` file
- run `npm install --save @opentelemtry/api` which will install the API packages
- run `npm run dev` or `vercel dev` to start the development server
