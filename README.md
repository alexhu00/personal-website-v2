# alexhu.com — personal site

Static HTML/CSS/JS site. No build step. Works directly with GitHub Pages.

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → Deploy from branch → main / root**
3. Your site will be live at `https://<username>.github.io/<repo-name>/`

For a custom domain (e.g. `alexhu.com`), add a `CNAME` file with just the domain name, then configure your DNS per [GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Adding photos

Photos are organized into three subfolders matching the filter tabs on the Photos page:

```
assets/photos/
├── life/          ← "Life" tab
├── graduation/    ← "Graduation" tab
└── engagements/   ← "Engagements" tab
```

**Workflow:**
1. Drop your photo into the right subfolder (e.g. `assets/photos/life/nyc-sunset.jpg`)
2. Open `content.json` and add one line to the matching category:

```json
"life": [
  { "src": "assets/photos/life/nyc-sunset.jpg", "caption": "Golden hour, the High Line · 2025" },
  { "src": "assets/photos/life/subway.jpg",      "caption": "Late train home · 2025" }
]
```

The Photos page will automatically show the right count on each filter tab and display the grid. Order in the JSON = order on the page.

**Portrait (About page):** drop a photo at `assets/photos/portrait.jpg`.

**Home strip (5 thumbnails):** edit `home.media` in `content.json` — point each slot at any photo/video-still src you want.

---

## Adding videos

Videos use YouTube links. For each video:

1. Upload to YouTube (can be unlisted)
2. Add a thumbnail still to `assets/videos/`
3. Add an entry to `content.json`:

```json
"videos": [
  {
    "thumb": "assets/videos/frisbee-thumb.jpg",
    "url": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    "title": "Ultimate Frisbee Highlights",
    "tag": "Sports · reel"
  }
]
```

Clicking the thumbnail opens the video fullscreen in a lightbox (YouTube embed, autoplays).

---

## Adding work / projects

Edit the `work` section of `content.json`:

- `selected` — the featured 2-column CDP work at the top
- `projects` — the 3-column side projects grid

Images go in `assets/work/`.

---

## Run locally

```bash
# Python (built-in)
python3 -m http.server 8080

# Then open: http://localhost:8080
```

You need a local server (not just opening the HTML file) because the pages fetch `content.json`.
