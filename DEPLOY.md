# Deploy to jomlimteh.com — step by step

Total time: ~20 minutes (mostly waiting for DNS to propagate).

---

## Step 1 — Initialize Git locally (2 min)

Open terminal in your `jomlimteh` folder and run:

```bash
git init
git add .
git commit -m "Initial wedding site"
```

---

## Step 2 — Create GitHub repo (3 min)

1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click **+** top right → **New repository**
3. Repository name: `jomlimteh`
4. Visibility: **Private** ← important, keeps your wedding details out of public search
5. Don't tick any of the README/license/.gitignore boxes
6. Click **Create repository**

GitHub will show you a page with commands. Copy and run these in your terminal (replace `YOURUSERNAME`):

```bash
git remote add origin https://github.com/YOURUSERNAME/jomlimteh.git
git branch -M main
git push -u origin main
```

If git prompts for password, use a **Personal Access Token** instead:
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token (classic), tick `repo` scope, set expiration to 90 days
- Copy the token and paste it when git asks for password

---

## Step 3 — Deploy to Vercel (5 min)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel
4. From dashboard: **Add New… → Project**
5. Find your `jomlimteh` repo → **Import**
6. Don't change any settings (Next.js is auto-detected)
7. Click **Deploy**
8. Wait ~90 seconds
9. You'll get a temporary URL like `jomlimteh-abc123.vercel.app` — click it to verify the site works

---

## Step 4 — Connect jomlimteh.com (10 min, mostly waiting)

In Vercel:
1. Your project → **Settings** → **Domains**
2. Type `jomlimteh.com` → **Add**
3. Vercel shows DNS records to configure (typically an A record for the apex domain and a CNAME for www)

Now go to where you bought the domain:
1. Find DNS / DNS Management / Nameservers section
2. Add the records Vercel showed you exactly
3. Save

Wait 5-30 minutes. Vercel auto-detects when DNS resolves and switches the domain to "Active" status. Then `https://jomlimteh.com` is live.

---

## After deploy — the iteration loop

Every change from now on follows this pattern:

```bash
# Edit a file (config.ts, Hero.tsx, etc.)

git add .
git commit -m "tweak: bigger hero font"
git push
```

Vercel auto-rebuilds in ~60 seconds. Refresh jomlimteh.com to see the change live.

---

## Common file edits

| What you want to change | File |
|---|---|
| Names, date, venue, parents, RSVP deadline | `src/lib/config.ts` |
| Story timeline copy | `src/components/Story.tsx` (the `milestones` array at the top) |
| Background music | replace `public/music/wedding.mp3` |
| Hero layout / Chinese phrases | `src/components/Hero.tsx` |
| Section order / add or remove sections | `src/app/page.tsx` |

---

## If something breaks

- Check the build logs in Vercel — every push shows whether it built successfully
- To roll back: in Vercel → Deployments → find the last working one → **Promote to Production**
- Locally, `git log --oneline` shows your commit history; `git reset --hard COMMITHASH` reverts to any earlier point

囍 Good luck.
