# Adamar website (with homepage video)

## Files — keep this exact folder structure

```
index.html            <- homepage
about.html            <- company story (real copy from your Wix site)
gallery.html          <- photo grid + featured video
technology.html       <- hub page linking to Battery and Motor
battery.html          <- battery technology detail page
motor.html            <- motor technology detail page
faq.html              <- accordion FAQ
blog.html             <- news/updates listing
hunter.html            }
highway.html            }
zero.html                }  one page per model — real copy pulled
urban.html               }  from your live Wix site
max.html                }
classic.html            }
surf.html              }
style.css             <- shared styling for every page
main.js               <- shared behaviour for every page
style-lab.html        <- playground for testing colors/fonts/animations
assets/
    hero-loop.mp4       <- homepage background video
    hero-poster.jpg
    detail-loop.mp4     <- second clip, used on About + Gallery
    detail-poster.jpg
    gallery/            <- 6 still frames pulled from your footage
```

## What's new in this round

- **Every model now has TWO pages**, matching what your Wix site
  actually had: the overview page (hunter.html) plus a deeper
  "Read more" page (hunter-detail.html) covering the motor, battery
  and BMS, controller, and charger — using the real component copy
  from your live Wix site for every one of the 7 models.
- **Real content everywhere** — model pages, About, and the new
  detail pages all use actual copy pulled directly from your live
  Wix site, not placeholder text.
- **Unlimited fonts** — style-lab.html now has a free-text font field
  instead of a fixed dropdown. Type any font name that exists on Google
  Fonts (fonts.google.com) and it loads live in the preview.
- **15 headline animations** — Slide up, Fade, Flicker, Typewriter,
  Cascade, Blur, Mask wipe, 3D flip, Elastic, Glitch, Zoom, Wave,
  Rotate, Neon pulse, Split-color.
- **Technology pages** — a new Battery and Motor page, linked from a
  Technology hub in the navigation.
- **Scroll animation on every page** — headings, spec grids, and
  content blocks now animate into view as you scroll, site-wide.

Everything else (index.html, style.css, main.js) can be loose in one
folder like last time — but this time there's one folder you DO need
to keep: **assets**. It has to sit right next to index.html, with
hero-loop.mp4 and hero-poster.jpg inside it. If those get separated,
the homepage video won't show (same issue as before with css/js).

## What I did with your video

Your file (New_EGO-Urban_2023.mp4) was a beautiful full-length product
reveal — but at 200MB and over 2 minutes, it was much too large and
long for a website background. I trimmed it down to an 11-second
looping clip of the smooth product pan, removed the audio (background
videos autoplay silently — browsers block autoplay with sound), resized
it, and compressed it to under 1MB so it loads fast for visitors.

## Replacing it with a different clip later

If you get new footage and want to swap it in yourself:
1. Trim it to a short clip (5-15 seconds works best for a loop).
2. Use a free tool like CloudConvert (cloudconvert.com) to make sure
   it's under about 5-8MB — large videos will make the homepage load
   slowly.
3. Replace the file at assets/hero-loop.mp4, keeping the exact same
   file name (or update the file name inside index.html to match).

Or just send me the new footage any time and I'll process and drop it
in for you.

## Everything else

See the previous notes below for hosting (Netlify) and connecting your
domain — unchanged.

### Hosting for free
Netlify, Cloudflare Pages, or GitHub Pages — pick one, upload this
folder, done. No template fees, ever.

### Contact form
Not wired up to an inbox yet. Free options: Formspree.io or
Web3Forms.com. Say the word and I'll connect one.

## Setting up your free control panel (Decap CMS)

This site now includes everything needed for a real, free admin panel
where you can edit text and upload/replace photos without touching
code. It needs three things connected together, all free:

1. **A GitHub account** — stores your site's files with version history.
2. **Netlify Identity + Git Gateway** — turned on in your existing
   Netlify project, this handles your login.
3. **The `/admin` page** already built into this site — the actual
   editing screen, powered by a free tool called Decap CMS.

### One-time setup

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new, empty repository (e.g. "adamar-site") and upload all
   these files into it using GitHub's web upload — no command line
   needed.
3. In Netlify, go to your project → Project configuration → Build &
   deploy → Link repository, and connect it to that GitHub repo.
   This switches you from manual drag-and-drop deploys to automatic
   ones — any change to the repo (including from the admin panel)
   publishes automatically.
4. In Netlify, go to Project configuration → Identity, click
   Enable Identity.
5. Still under Identity, scroll to Git Gateway and click Enable
   Git Gateway.
6. Under Identity → Invite users, invite yourself with your email.
   You'll get an email — click it to set a password.
7. Visit yoursite.com/admin on your live site, log in with that
   email and password, and you're in.

### What you can do from the admin panel

- Edit all the text on the homepage, About page, and every model's
  overview + detail page through simple forms — no code.
- Upload, replace, or delete photos under Media — anything in the
  assets folder, including the gallery images.
- Changes publish automatically within a minute or two of saving.

I'll walk you through each of these steps directly in chat when
you're ready — just say so.
