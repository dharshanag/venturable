# Venturable Foundation — website

Plain HTML, CSS, and a small JS file. No build step, no framework, no dependencies.
Open `index.html` in a browser and it works.

## Files

```
venturable-site/
├── index.html          Home
├── about.html          About Us (+ Meet the Team)
├── projects.html       Projects
├── get-involved.html   Join Us (#join) + Donate (#donate)
├── contact.html        Contact
├── blog.html           Blog
└── assets/
    ├── styles.css      All styling — colors live at the top in :root
    ├── main.js         Mobile menu, active nav link, form handling
    └── logo.svg        PLACEHOLDER logo — replace this
```

## Preview it locally

```bash
cd venturable-site && python3 -m http.server 8000
```

Then open http://localhost:8000

## Content status

The mission, vision, "what we do", "who we serve", "why it matters", and "how to help" copy is
the real text from the Venturable framework document. The logo is the real mark, rebuilt as SVG
so it stays sharp at any size.

## Before this goes live

Two things are still placeholders. Each is marked with a yellow "Editor note" box on the page —
search the project for `class="todo"` to find them all, and delete each box once handled.

1. **Donations** (`get-involved.html`) — the Donate button is deliberately not wired up. Confirm
   Venturable's legal/tax status, then create a donation page with a real provider (Zeffy and
   Givebutter are free for small nonprofits; PayPal Giving Fund and Stripe also work) and paste
   the URL into the `href`. **Never collect card details on this site directly.** The suggested
   amounts ($10/$25/$60/$150) are grounded estimates — adjust them to your real costs when you know them.
2. **Blog posts** (`blog.html`) — the three cards are suggested topics, not published posts.
   Write them or delete the cards.

Contact details are done: email `venturablefoundation@gmail.com` and Instagram
`@venturablefoundation` are both live.

Also worth adding when you have them: **team photos** (drop in `assets/`, follow the
commented-out `<img>` tag in `about.html`) and **real numbers** on the Projects page — how many
kids reached, how many schools partnered. A number persuades where a description doesn't.

## Forms

Both forms are **live** — each embeds a Google Form in an iframe, so responses go straight to
that form's own responses tab (and any linked Sheet). Nothing else to configure.

- **Join Us** (`get-involved.html`) → form ID `1xRj9h_...`
- **Contact** (`contact.html`) → form ID `1uYFBuBon...`

To swap in a different form: in Google Forms hit **Send → link (🔗)** to get the form's address,
then replace the ID in both the `<iframe src>` and the "open in a new tab" fallback link on that
page.

The iframe height is fixed (a cross-origin frame can't measure itself). If a form's own inner
scrollbar appears after you add or remove questions, bump `.embed-form iframe { height }` in
`assets/styles.css`.

`main.js` still contains a small `data-demo-form` submit handler. Nothing on the site uses it
now, but it's left in place as a utility if you ever add a plain HTML form wired to a service
like Formspree or Netlify Forms.

## Colors

Everything is driven by CSS variables at the top of `assets/styles.css`. To adjust the theme,
change these — nothing else needs touching:

| Variable | Value | Used for |
|---|---|---|
| `--green-950` | `#071B10` | Hero and footer background |
| `--green-900` | `#0B2818` | Header, dark bands |
| `--green-600` | `#1E5C3C` | Primary buttons, links |
| `--green-300` | `#7FD1A3` | Accent — highlights, stats, accent buttons |
| `--gray-100` | `#F2F4F2` | Page background |
| `--gray-200` | `#E5E9E6` | Card borders |
| `--ink-soft` | `#3D4A42` | Body text |

## Hosting

Any static host works. GitHub Pages and Netlify are both free: push this folder to a repo,
point the host at it, done. No server needed.
