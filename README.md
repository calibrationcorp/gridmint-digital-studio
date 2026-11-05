# GridMint Digital Studio

Next.js website starter for GridMint Digital Studio. Includes responsive marketing pages, service overview and a server-side inquiry endpoint backed by Supabase.

## Local setup
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the Supabase values.
4. Run `npm run dev`.

## Supabase setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL Editor.
3. Add the project URL and service-role key to the Render environment (never expose the service-role key in browser code).

## Render deployment
Create a **Web Service** from this GitHub repository.
- Runtime: Node
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Add environment variables from `.env.example`.
- Deploy, then add the custom domain in Render. Copy the exact DNS records Render provides into IONOS DNS.

## Current scope
The public marketing site and inquiry capture endpoint are implemented. Client authentication, customer portal, admin dashboard, secure file uploads, calendar booking integration and live messaging are planned next-stage features and are not represented as completed here. Before production use, configure Supabase, Resend, privacy/terms pages, spam protection, backups and review access controls.
