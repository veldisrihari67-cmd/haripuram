# Haripuram architecture (v1)

Haripuram is an offline-first Progressive Web App with no backend, no login, no analytics, and no network APIs.

## Stack

- `index.html` — village map shell and detail panel markup
- `styles.css` — mobile-first layout, map scene, slide-in panel
- `app.js` — location interactions and bundled sample data
- `data/locations.json` — the same sample content as a JSON file
- `manifest.json` + `service-worker.js` — installable offline app

## Map

The homepage is a fullscreen illustrated map of seven places:

1. Pandu House
2. School
3. Library
4. Temple
5. Banyan Tree
6. Cheruvu
7. Fields

Tapping a place opens a local detail panel. All words, stories, and place data live in the app bundle.
