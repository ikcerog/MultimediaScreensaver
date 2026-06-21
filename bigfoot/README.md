# SQUATCHNET

A high-tech, dark-themed global cryptid sightings atlas. Built as three
independent lanes for CodePen 2.0:

| CodePen lane | File                  |
| ------------ | --------------------- |
| HTML         | `index.html`          |
| CSS          | `style.css`           |
| JS           | `bigfoot.js`          |

Locally, just open `index.html` (or serve the folder) — everything is wired.

## What's in it

- **Leaflet** dark CartoDB tiles, marker clustering, heatmap layer toggle
- **Live BFRO feed** — fetches ~5,000 geocoded Sasquatch reports from
  `timothyrenner/bfro-sightings-data` via jsDelivr (CSV → PapaParse)
- **Curated global cryptid layer** — 25+ hand-written entries with
  Wikipedia links (Yeti, Yowie, Yeren, Almas, Orang Pendek, Mapinguari,
  Hibagon, Mande Barung, Patterson–Gimlin, Skookum cast, Ape Canyon, …)
- **Hover cards** with class, date, season, location, summary and quick
  Wikipedia / BFRO links
- **Detail modal** on click with weather conditions and reference links
- **Filters** — BFRO classification (A/B/C), season, year range
  (1900-2025), free-text search across title/state/county/description
- **Chart.js trend panels** — sightings by decade, by season, top states
- **Scanner FX** — animated grid, scanlines, radar loader, pulse markers

## Data sources (all free)

- BFRO geocoded reports — public dataset by Timothy Renner (MIT)
- CartoDB Dark Matter map tiles — free for OSM-attributed use
- Wikipedia article links per cryptid
- BFRO public report URLs (`/GDB/show_report.asp?id=...`)

## Notes

- No API key required.
- The BFRO CSV is ~3 MB and parses in the browser; data appears within
  ~1-2 s on broadband. Curated global cases render immediately so the
  map is never empty.
- If both jsDelivr and raw.githubusercontent.com block the fetch, the
  feed status shows `BFRO OFFLINE` and the curated layer remains.
