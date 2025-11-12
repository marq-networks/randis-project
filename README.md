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

## Email Configuration

The contact form sends email via SMTP. Configure credentials using environment variables:

1. Copy `.env.example` to `.env.local` at the project root.
2. Fill in real SMTP values. Example (Gmail App Password):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="Rutledge & Associates <your@gmail.com>"

CONTACT_TO=rrutledge@rutledge.associates
CONTACT_BCC=saif@marqnetworks.com
```

- `SMTP_FROM` must be an authorized sender with your provider.
- If `SMTP_*` envs are not set, the server uses Ethereal (test-only) and returns a preview URL.
- Restart the dev server after editing `.env.local`.

### Resend (API) alternative

On Vercel, if SMTP isn’t configured, you can use Resend for reliable delivery:

```
RESEND_API_KEY=your_resend_api_key
RESEND_FROM="Rutledge & Associates <no-reply@rutledge.associates>"
CONTACT_TO=rrutledge@rutledge.associates
CONTACT_BCC=saif@marqnetworks.com
```

- In production, set these in Vercel → Settings → Environment Variables.
- When `RESEND_API_KEY` is present and `SMTP_HOST` is not, the API route sends via Resend.

### SendGrid (API) alternative

You can also use SendGrid (no SMTP) for reliable delivery on Vercel:

```
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM="Rutledge & Associates <no-reply@rutledge.associates>"
CONTACT_TO=rrutledge@rutledge.associates
CONTACT_BCC=saif@marqnetworks.com
```

- In production, set these in Vercel → Settings → Environment Variables.
- The route will use SendGrid if SMTP is not complete and Resend is not configured.
- For best results, verify your sender domain in SendGrid (DKIM/SPF) or use a verified sender address.
